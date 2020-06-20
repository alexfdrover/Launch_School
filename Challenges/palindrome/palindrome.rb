=begin
  take a string, determine if it's a palindrome
  can't use regex or reverse methods
  case insensitive
  ignores all non-letter characters
  input: string
  output: boolean
  examples: "rotor" => true, "redder" => true, "motor" => false, "no1, 3on" => true
  structure: strings
  algo:
  start at either end of the word
  figure out if the current character is valid
    determine valid characters
      ordinal values 97-122
    if yes, use that character for the comparison
    if no, move characters until valid
  compare character validity
    if yes repeat process
    if no then it's not a palindrome
  if all characters evaluated then it's a palindrome
  
  edge cases:
    empty string
    only non-valid characters
    one character?
=end

class PalindromeConfirmer
  VALID_RANGE = (97..122)

  def initialize(input)
    @input = input.downcase
  end

  def is_a_palindrome?
    return false if @input.empty? || (@input.chars.none? {|char| (VALID_RANGE === char.ord) })
    char_ord_arr = @input.chars.map { |char| VALID_RANGE === char.ord ? char.ord : nil }.compact

    idx1 = 0
    idx2 = char_ord_arr.size - 1
    while idx1 <= idx2
      return false unless char_ord_arr[idx1] == char_ord_arr[idx2]
      idx1 += 1
      idx2 -= 1
    end
    true
  end
end

p PalindromeConfirmer.new("%^&a").is_a_palindrome?