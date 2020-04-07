# calculator.rb
# ask the user for two numbers
# ask the user for an operation to perform
# perform the operation on the two numbers
# output the result

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(number)
  number.to_i != 0
end

def operation_to_message(operator)
  case operator
  when "1"
    "Adding"
  when "2"
    "Subtracting"
  when "3"
    "Multiplying"
  when "4"
    "Dividing"
  end
end

prompt("Welcome to calculator! Enter your name: ")
name = nil
loop do
  name = gets.chomp
  if name.empty?
    puts "Please enter a valid name"
  else
    break
  end
end
prompt("Hi #{name}!")

loop do
  number1 = nil
  loop do
    prompt("What's the first number?")
    number1 = gets.chomp

    if valid_number?(number1)
      break
    else
      prompt("Invalid number. ")
    end
  end

  number2 = nil
  loop do
    prompt("What's the second number?")
    number2 = gets.chomp

    if valid_number?(number2)
      break
    else
      prompt("Invalid number. ")
    end
  end

  operator_prompt = <<-MSG
  What operation would you like to perform?
  1) add
  2) subtract
  3) multiply
  4) divide
  MSG
  prompt(operator_prompt)
  operator = nil
  loop do
    operator = gets.chomp
    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt("Must choose 1, 2, 3 or 4")
    end
  end
  prompt("#{operation_to_message(operator)} the two numbers...")

  result = case operator
           when "1"
             number1.to_i + number2.to_i
           when "2"
             number1.to_i - number2.to_i
           when "3"
             number1.to_i * number2.to_i
           else
             number1.to_f / number2.to_i
           end

  prompt("The result is #{result}")

  prompt("Would you like to calculate another number? (Y to continue): ")
  continue = gets.chomp.downcase
  break if (continue != 'y') || (continue != 'yes')
end
