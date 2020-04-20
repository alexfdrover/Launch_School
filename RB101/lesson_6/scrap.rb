require 'pry'

puts "Choose an option: 1 or 2"
user_input = gets.chomp
binding.pry

if user_input == 1
  puts "You picked Option 1!"
elsif user_input == 2
  puts "You picked Option 2!"
else
  puts "Invalid Option!"
end