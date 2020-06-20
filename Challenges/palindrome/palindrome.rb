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
  attr_reader :ordinal_array

  VALID_RANGE = (97..122)

  def initialize(input)
    @input = input.downcase
  end

  def a_palindrome?
    return false if invalid_input?
    make_ordinal_array

    idx1 = 0
    idx2 = ordinal_array.size - 1
    while idx1 <= idx2
      return false unless ordinal_array[idx1] == ordinal_array[idx2]
      idx1 += 1
      idx2 -= 1
    end
    true
  end

  def invalid_input?
    @input.empty? || (@input.chars.none? { |char| (VALID_RANGE.include?(char.ord)) })
  end

  def make_ordinal_array
    @ordinal_array = @input.chars
                           .map { |char| VALID_RANGE.include?(char.ord) ? char.ord : nil }
                           .compact
  end
end

p PalindromeConfirmer.new("%^&aba").a_palindrome? == true
p PalindromeConfirmer.new("%^&").a_palindrome? == false
p PalindromeConfirmer.new("%^&a").a_palindrome? == true
p PalindromeConfirmer.new("rotor").a_palindrome? == true
p PalindromeConfirmer.new("motor").a_palindrome? == false
p PalindromeConfirmer.new("no1, 3on").a_palindrome? == true
