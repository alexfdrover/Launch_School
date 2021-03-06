require 'pry'
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

def prompt(msg)
  puts "==> #{msg}"
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  system 'clear'
  puts "You're a #{PLAYER_MARKER}, computer is a #{COMPUTER_MARKER}"
  puts ""
  puts "     |     |     "
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}  "
  puts "     |     |     "
  puts "-----+-----+-----"
  puts "     |     |     "
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}  "
  puts "     |     |     "
  puts "-----+-----+-----"
  puts "     |     |     "
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}  "
  puts "     |     |     "
  puts ""
end
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_piece!(brd)
  square = ''
  loop do
    prompt "Choose a square (#{joinor(empty_squares(brd))}): "
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice."
  end
  brd[square] = PLAYER_MARKER
end

def computer_places_piece!(brd)
  #binding.pry
  if determine_offensive_square(brd)
    square = determine_offensive_square(brd)
  elsif determine_danger_square(brd)
    square = determine_danger_square(brd)
  elsif brd[5] == ' '
    square = 5
  else
    square = empty_squares(brd).sample
  end
  brd[square] = COMPUTER_MARKER
end

def place_piece!(brd, who_turn)
  if who_turn == 'player'
    player_places_piece!(brd)
  elsif who_turn == 'computer'
    computer_places_piece!(brd)
  end
end

def determine_danger_square(brd)
  WINNING_LINES.each do |line|
    index = 0
    if (brd.values_at(*line).count(PLAYER_MARKER) == 2)
      while index < 3
        return line[index] if brd[line[index]] == ' '
        index += 1
      end
    end
  end
  nil
end

def determine_offensive_square(brd)
  WINNING_LINES.each do |line|
    index = 0
    if (brd.values_at(*line).count(COMPUTER_MARKER) == 2)
      while index < 3
        return line[index] if brd[line[index]] == ' '
        index += 1
      end
    end
  end
  nil
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(line[0], line[1], line[2]).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(line[0], line[1], line[2]).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def joinor(arr, delimiter=', ', word='or')
  case arr.size
  when 0 then ''
  when 1 then arr.first
  when 2 then arr.join(" #{word} ")
  else
    arr[-1] = "#{word} #{arr.last}"
    arr.join(delimiter)
  end
end

def alternate_player(current_player)
  current_player == 'player' ? 'computer' : 'player'
end

player_wins = 0
computer_wins = 0

loop do # multiple game loop
  prompt "Who moves first? (Player or Computer): "
  current_player = gets.downcase.chomp

  board = initialize_board

  loop do # main game loop
    display_board(board)
    place_piece!(board, current_player)
    break if someone_won?(board) || board_full?(board)
    current_player = alternate_player(current_player)
  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won!"
  else
    prompt "It's a tie!"
  end

  prompt "Player Score: #{player_wins} --- Computer Score: #{computer_wins}"
  break if (player_wins == 5 || computer_wins == 5)
  prompt "Play again? (y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thanks for playing!"
