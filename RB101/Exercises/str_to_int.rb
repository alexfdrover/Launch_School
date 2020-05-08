=begin
HSH = { '1' => 1, '2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9, '0' => 0 }

def string_to_integer(string)
  index = string.size

  sum = 0
  string.chars.each do |element|
    
    if element == '+' || element == '-'
      index -= 1
      next
    end
    
    sum += HSH[element] * (10 ** (index - 1))
    index -= 1
   
  end
  
  sum = -sum if string[0] == '-'
  sum
end



want string preprocessor such that str_to_int core logic can remain unchained, but method return still correct
Algo:
want a flag that can prepend + or - to the final answer, depending on the first string character
take a string, determine if the first character is numeric, + or -
  if numeric, make no changes and pass the number to sti
  elsif first character is positive
    set flag to +
    remove first character from string
    pass modified string to sti
  elsif first character is negative
    set flag to -
    remove first character from string
    pass modified string to sti
sti method runs as normal
modify sti return value depending on flag
  if no flag, or flag is +, return number normally
  if flag is -, return -answer


=end

def string_to_integer(string)
  flag = string[0]
  string.delete! "+-"

  char_num = %w(0 1 2 3 4 5 6 7 8 9)
  num_container = 0
  string.each_char do |char|
    num_container = num_container * 10 + char_num.index(char)
  end

  flag == '-' ? -num_container : num_container
end

p string_to_integer('43221') == 43221
p string_to_integer('570') == 570
p string_to_integer('-4321') == -4321
p string_to_integer('+570') == 570
p string_to_integer('51230') == 51230
