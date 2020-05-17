class Score
  attr_accessor :human, :computer
  WINS = 3

  def initialize
    @human = 0
    @computer = 0
  end

  def increment(winner)
    case winner
    when 'human' then self.human += 1
    when 'computer' then self.computer += 1
    end
  end

  def max?
    (self.human > WINS) || (self.computer > WINS)
  end
end

class Move
  VALUES = ['rock', 'paper', 'scissors']

  attr_reader :value

  def initialize(value)
    @value = value
  end

  def to_s
    @value
  end

  def scissors?
    @value == 'scissors'
  end

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def >(other_move)
    rock? && other_move.scissors? ||
      paper? && other_move.rock?  ||
      scissors? && other_move.paper?
  end
end

class Player
  attr_accessor :move, :name

  def initialize
    set_name
  end
end

class Human < Player
  def set_name
    n = ""

    loop do
      puts "What's your name?: "
      n = gets.chomp
      break unless n.empty?
      puts "Sorry, please enter a value."
    end

    self.name = n
  end

  def choose
    choice = nil
    loop do
      puts "Please choose rock, paper, or scissors: "
      choice = gets.chomp
      break if Move::VALUES.include? choice
      puts "Sorry, invalid choice."
    end
    self.move = Move.new(choice)
  end
end

class Computer < Player
  def set_name
    self.name = ['R2D2', 'Hal', 'Chappie'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end
end

class Rule
  def initialize
    # not sure what the "state" of a rule object should be
  end
end

class RPSGame
  attr_accessor :human, :computer, :score

  def initialize
    @human = Human.new
    @computer = Computer.new
    @score = Score.new
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors!"
  end

  def display_goodbye_message
    puts "Thanks for playing Rock, Paper, Scissors. Goodbye!"
  end

  def display_choice
    puts "#{human.name} chose #{human.move}"
    puts "#{computer.name} chose #{computer.move}"
  end

  def display_winner
    display_choice

    if human.move > computer.move
      puts "#{human.name} won!"
      score.increment('human')
    elsif computer.move > human.move
      puts "#{computer.name} won!"
      score.increment('computer')
    else
      puts "It's a tie"
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      puts "Sorry, must be y or n"
    end

    #system 'clear'
    return true if answer == 'y'
    false
  end

  def display_score
    puts "#{human.name}'s score is #{score.human}"
    puts "#{computer.name}'s score is #{score.computer}"
  end

  def play
    display_welcome_message

    loop do
      human.choose
      computer.choose
      display_winner
      display_score
      break if score.max?
      break unless play_again?
    end

    display_goodbye_message
  end
end

RPSGame.new.play
