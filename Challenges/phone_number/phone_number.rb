=begin
rules:
if digits less than 10, assume bad number
if digits exactly 10, assume good number
if digits exactly 11, and first number 1, trim the 1, use rest
if digits exactly 11, and first number !1, bad number
if digits more than 11, assume bad number

input: string
output: string
if number invalid, return 10 0s i.e. '0000000000'
algo:
preprocess input string
  remove non-digits

for number method
check string length
if string length 10, return
if string length 11 && first digit is 1, return
if string less 12 && first digit is !1, returns 0s
if string greater than 11, returns 0s
if string less than 10, returns 0s

for area code method
return first three digits in a string

for to_s method
return number in form of '(123) 456-7890'
=end

class PhoneNumber
  ERROR_MSG = '0000000000'

  def initialize(input_num)
    @input_num = input_num
    preprocess_number
  end

  def preprocess_number
    @input_num = ERROR_MSG if @input_num.match?(/[a-z]/i)
    @input_num.gsub!(/[^0-9]/, '')
  end

  def number
    case
    when @input_num.size == 10                          then @input_num
    when @input_num.size == 11 && @input_num[0] == '1'  then @input_num[1..-1]
    else ERROR_MSG
    end
  end

  def area_code
    @input_num[0..2]
  end

  def to_s
    @input_num = number
    "(#{area_code}) #{@input_num[3..5]}-#{@input_num[6..9]}"
  end
end
