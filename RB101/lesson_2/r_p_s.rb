# r_p_s.rb

VALID_CHOICES = %w(r p s l sp)

def prompt(message)
  puts("=> #{message}")
end

def win?(first, second)
  (first == 'r' && second == 'l') ||
    (first == 'l' && second == 'sp') ||
    (first == 'sp' && second == 's') ||
    (first == 's' && second == 'p') ||
    (first == 'p' && second == 'r') ||
    (first == 'r' && second == 's') ||
    (first == 's' && second == 'l') ||
    (first == 'l' && second == 'p') ||
    (first == 'p' && second == 'sp') ||
    (first == 'sp' && second == 'r')
end

def display_results(player, computer)
  if win?(player, computer)
    prompt("You won!")
  elsif player == computer
    prompt("It's a tie!")
  else
    prompt("You lost!")
  end
end

# Initializing variables for use within loop
choice = nil
player_count = 0
computer_count = 0

# Main loop
loop do
  # Human choice and verification loop
  loop do
    prompt("Choose one: Rock (r), Paper (p), Scissors (s), Lizard (l) or Spock (sp)")
    choice = gets.chomp

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt("That's not a valid choice.")
    end
  end

  computer_choice = VALID_CHOICES.sample
  prompt("You chose: #{choice}; the computer chose: #{computer_choice}")

  display_results(choice, computer_choice)

  if win?(choice, computer_choice)
    player_count += 1
  elsif choice == computer_choice

  else
    computer_count += 1
  end

  # prompt("Play again? (y/n): ")
  # answer = gets.chomp
  # break unless answer.downcase.start_with?('y')
  prompt("Player Score: #{player_count} -- Computer Score: #{computer_count}")
  break if player_count == 5 || computer_count == 5
end

prompt("Thank you for playing. Goodbye.")
