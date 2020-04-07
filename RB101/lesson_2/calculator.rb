# calculator.rb
# ask the user for two numbers
# ask the user for an operation to perform
# perform the operation on the two numbers
# output the result
require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')
LANGUAGE = 'en'

def messages(message, lang='en')
  MESSAGES[lang][message]
end

def prompt(message)
  puts "=> #{message}"
end

def number?(input)
  integer?(input) || float?(input)
end

def integer?(input)
  /^\d+$/.match(input)
end

def float?(input)
  /\d/.match(input) && /^\d*\.?\d*$/.match(input)
end

def operation_to_message(operator)
  word = case operator
          when "1"
            "Adding"
          when "2"
            "Subtracting"
          when "3"
            "Multiplying"
          when "4"
            "Dividing"
          end

  word
end

prompt(messages('welcome', LANGUAGE))
name = nil
loop do
  name = gets.chomp
  if name.empty?
    puts messages('invalid_name')
  else
    break
  end
end
prompt("Hi #{name}!")

loop do
  number1 = nil
  loop do
    prompt(messages('first_ask'))
    number1 = gets.chomp

    if number?(number1)
      break
    else
      prompt(messages('invalid_num'))
    end
  end

  number2 = nil
  loop do
    prompt(messages('second_ask'))
    number2 = gets.chomp

    if number?(number2)
      break
    else
      prompt(messages('invalid_num'))
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
      prompt(messages('invalid_operation'))
    end
  end
  prompt("#{operation_to_message(operator)} the two numbers...")

  result = case operator
           when "1"
             number1.to_f + number2.to_f
           when "2"
             number1.to_f - number2.to_f
           when "3"
             number1.to_f * number2.to_f
           else
             number1.to_f / number2.to_f
           end

  prompt("The result is #{result}")

  prompt(messages('again'))
  continue = gets.chomp.downcase
  break if continue != 'y'
    
  
end
