
def triple_double(num1, num2)
  num_strings = %w(0 1 2 3 4 5 6 7 8 9)
  num1_chars = num1.to_s.chars
  num2_chars = num2.to_s.chars
  for num in num_strings
    return 1 if num1_chars.count(num) == 3 && num2_chars.count(num) == 2
  end
  0
end

p triple_double(12345, 12345) #== 0
p triple_double(666789, 12345667) #== 1
