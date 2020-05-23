
class GuessingGame
  RESPONSES = { high:  "Your number is too high",
                low:   "Your number is too low",
                match: "That's the number!" }.freeze
  GAME_RESULT_MESSAGE = { win:  "You won!",
                          lose: "You have no more guesses. You lost!" }.freeze

  def initialize
    @guesses_remaining = nil
    @player_guess = nil
    @lower_bound = nil
    @upper_bound = nil
    @secret_num = nil
  end

  def display_guesses_remaining
    puts "You have #{@guesses_remaining} guesses remaining"
  end

  def prompt_user_for_guess
    answer = nil
    loop do
      puts "Enter a number between #{@lower_bound} and #{@upper_bound}: "
      answer = gets.chomp.to_i
      break if (@lower_bound..@upper_bound).cover? answer
      puts "Invalid guess."
    end
    @player_guess = answer
  end

  def evaluate_guess
    case
    when @player_guess == @secret_num  then puts RESPONSES[:match]
    when @player_guess < @secret_num   then puts RESPONSES[:low]
    when @player_guess > @secret_num   then puts RESPONSES[:high]
    end
  end

  def spacer
    puts ""
  end

  def decrement_remaining_guesses
    @guesses_remaining -= 1
  end

  def won?
    if @player_guess == @secret_num
      puts GAME_RESULT_MESSAGE[:won]
      true
    end
  end

  def no_guesses_remaining?
    if @guesses_remaining == 0
      puts GAME_RESULT_MESSAGE[:lose]
      true
    end
  end

  def clear
    system 'clear'
  end

  def prompt_range
    puts "Please enter a small number: "
    @lower_bound = gets.chomp.to_i

    puts "Please enter a large number: "
    @upper_bound = gets.chomp.to_i
  end

  def determine_secret_number
    @secret_num = (@lower_bound..@upper_bound).to_a.sample
  end

  def determine_amount_of_guesses
    size_of_range = @upper_bound - @lower_bound
    @guesses_remaining = Math.log2(size_of_range).to_i + 1
  end

  def play
    prompt_range
    determine_secret_number
    determine_amount_of_guesses
    loop do
      display_guesses_remaining
      prompt_user_for_guess
      evaluate_guess
      spacer
      decrement_remaining_guesses
      break if (won? || no_guesses_remaining?)
    end
  end
end

game = GuessingGame.new
game.play
