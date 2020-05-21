require 'pry'

class Board
  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                   [1, 4, 7], [2, 5, 8], [3, 6, 9],
                   [1, 5, 9], [3, 5, 7]]

  def initialize
    @squares = {}
    reset
  end

  def []=(num, marker)
    @squares[num].marker = marker
  end

  def [](num)
    @squares[num].marker
  end

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  # returns marker or returns nil
  def winning_marker
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if three_identical_markers?(squares)
        return squares.first.marker
      end
    end
    nil
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  # rubocop:disable Metrics/AbcSize
  def draw
    puts "     |     |     "
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts "     |     |     "
    puts "-----+-----+-----"
    puts "     |     |     "
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts "     |     |     "
    puts "-----+-----+-----"
    puts "     |     |     "
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts "     |     |     "
    puts ""
  end
  # rubocop: enable Metrics/AbcSize

  def one_away_from_losing
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if two_markers_in_row?(squares, 'human')
        return line
      end
    end
    nil
  end

  def one_away_from_winning
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if two_markers_in_row?(squares, 'computer')
        return line
      end
    end
    nil
  end

  def choose_third_position(line)
    line.select { |position| @squares.fetch(position).marker == Square::INITIAL_MARKER }[0]
  end

  private

  def three_identical_markers?(squares)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 3
    markers.min == markers.max
  end

  def two_markers_in_row?(squares, whose_two_in_row)
    case whose_two_in_row
    when "computer" then marker = TTTGame::HUMAN_MARKER
    when "human" then marker = TTTGame::COMPUTER_MARKER
    end

    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 2
    return false if markers.any?(marker)
    true
  end
end

class Square
  INITIAL_MARKER = ' '

  attr_accessor :marker

  def initialize(marker = INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    @marker
  end

  def unmarked?
    marker == INITIAL_MARKER
  end

  def marked?
    marker != INITIAL_MARKER
  end
end

class Player
  attr_reader :marker
  attr_accessor :score

  def initialize(marker)
    @marker = marker
    @score = 0
  end
end

class TTTGame
  HUMAN_MARKER = 'X'
  COMPUTER_MARKER = 'O'
  FIRST_TO_MOVE = HUMAN_MARKER
  MAX_WINS = 4

  attr_reader :board, :human, :computer

  def initialize
    @board = Board.new
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    @current_marker = FIRST_TO_MOVE
  end

  private

  def clear
    system 'clear'
  end

  def display_welcome_message
    puts "Welcome to Tic Tac Toe"
    puts "First to #{MAX_WINS + 1} wins!"
    puts ""
  end

  def display_goodbye_message
    puts "Thanks for playing Tic Tac Toe. Goodbye!"
  end

  def display_board
    puts "You're a #{human.marker}. Computer is a #{computer.marker}."
    puts ""
    board.draw
    puts ""
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  def join_or(list_of_empty_squares, delimiter=', ')
    if list_of_empty_squares.size == 2
      list_of_empty_squares.join(' or ')
    elsif list_of_empty_squares.size == 1
      list_of_empty_squares.first
    else
      list_of_empty_squares[-1] = 'or ' + list_of_empty_squares[-1].to_s
      list_of_empty_squares.join(delimiter)
    end
  end

  def human_moves
    puts "Choose a square (#{join_or(board.unmarked_keys)}): "
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a valid choice."
    end
    board[square] = human.marker
  end

  def computer_moves
    if !!board.one_away_from_winning
      line = board.one_away_from_winning
      board[board.choose_third_position(line)] = computer.marker
    elsif !!board.one_away_from_losing
      line = board.one_away_from_losing
      board[board.choose_third_position(line)] = computer.marker
    elsif board[5] == ' '
      board[5] = computer.marker
    else
      board[board.unmarked_keys.sample] = computer.marker
    end
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = COMPUTER_MARKER
    else
      computer_moves
      @current_marker = HUMAN_MARKER
    end
  end

  def human_turn?
    @current_marker == HUMAN_MARKER
  end

  def display_result
    clear_screen_and_display_board

    case board.winning_marker
    when human.marker
      puts "You won!"
      human.score += 1
    when computer.marker
      puts "Computer won!"
      computer.score += 1
    else puts "It's a tie!"
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n): "
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts "Sorry, must be y or n"
    end

    answer == 'y'
  end

  def reset
    board.reset
    clear
    @current_marker = FIRST_TO_MOVE
  end

  def display_play_again_message
    puts "Let's play again!"
    puts ""
  end

  def max_score_reached?
    human.score > MAX_WINS || computer.score > MAX_WINS
  end

  def display_score
    puts "Human: #{human.score} -- Computer: #{computer.score}"
  end

  public

  def play
    clear
    display_welcome_message

    loop do
      display_board

      loop do
        current_player_moves
        break if board.someone_won? || board.full?
        clear_screen_and_display_board if human_turn?
      end

      display_result
      display_score

      break if max_score_reached? || play_again? == false
      reset
      display_play_again_message
    end

    display_goodbye_message
  end
end

game = TTTGame.new
game.play