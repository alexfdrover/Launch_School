
class Anagram
  def initialize(given_word)
    @given_word = given_word
  end

  def match(potential_anagrams)
    given_tally = @given_word.downcase.chars.tally
    potential_anagrams.select do |word|
      (word.downcase.chars.tally == given_tally) && (word.downcase != @given_word.downcase)
    end
  end
end