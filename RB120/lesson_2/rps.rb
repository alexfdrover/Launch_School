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

class History
  def initialize
    @history = []
  end

  def add(results)
    @history << results
  end

  def results
    @history.each_with_index do |arr, idx|
      puts "Round #{idx}: Human => #{arr.first} - Computer => #{arr.last}"
    end
  end
end

class Move
  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  attr_reader :value, :name, :weaknesses

  def initialize(value)
    @value = assignment(value)
  end

  def assignment(value)
    case value
    when 'rock' then Rock.new
    when 'paper' then Paper.new
    when 'scissors' then Scissors.new
    when 'lizard' then Lizard.new
    when 'spock' then Spock.new
    end
  end

  def to_s
    @value.name
  end

  def scissors?
    @value.name == 'scissors'
  end

  def rock?
    @value.name == 'rock'
  end

  def paper?
    @value.name == 'paper'
  end

  def lizard?
    @value.name == 'lizard'
  end

  def spock?
    @value.name == 'spock'
  end

  def >(other_move)
    rock? && (other_move.scissors? || other_move.lizard?)     ||
      paper? && (other_move.rock? || other_move.spock?)       ||
      scissors? && (other_move.paper? || other_move.lizard?)  ||
      lizard? && (other_move.paper? || other_move.spock?)     ||
      spock? && (other_move.scissors? || other_move.rock?)
  end
end

class Rock < Move
  attr_reader :weaknesses

  def initialize
    @name = 'rock'
    @weaknesses = ['paper', 'spock']
  end
end

class Paper < Move
  def initialize
    @name = 'paper'
    @weaknesses = ['scissors', 'lizard']
  end
end

class Scissors < Move
  def initialize
    @name = 'scissors'
    @weaknesses = ['rock', 'spock']
  end
end

class Lizard < Move
  def initialize
    @name = 'lizard'
    @weaknesses = ['scissors', 'rock']
  end
end

class Spock < Move
  def initialize
    @name = 'spock'
    @weaknesses = ['lizard', 'paper']
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
      puts "Please choose rock, paper, scissors, lizard or spock: "
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

    # system 'clear'
    return true if answer == 'y'
    false
  end

  def display_score
    puts "#{human.name}'s score is #{score.human}"
    puts "#{computer.name}'s score is #{score.computer}"
  end

  def store_round(history)
    history.add([human.move, computer.move])
  end

  def play
    display_welcome_message
    history = History.new

    loop do
      human.choose
      computer.choose
      store_round(history)
      display_winner
      display_score
      break if score.max? || play_again? == false
      
    end
    history.results
    display_goodbye_message
  end
end

RPSGame.new.play
