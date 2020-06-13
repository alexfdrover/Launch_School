require 'pry'

class Anagram
  def initialize(given_word)
    @given_word = given_word.downcase
  end

  def match(potential_anagrams)
    anagrams = find_anagrams
    anagrams.select { |word| potential_anagrams.include?(word) && word != @given_word }.uniq

  end

  private

  def find_anagrams
    @given_word.chars
               .permutation(@given_word.length)
               .to_a
               .map {|letters| letters.join}
  end
end

# input: a given word
# output: a list of potential anagrams
# data struct: string to array
=begin
algo:
- turn given word into each permutation of itself
  - break word into characters
  - want each permutation of those characters... Array#permutation(size of the word).to_a
    - will return an array of subarrays
  - join those subarrays back into words
- compare that list of word permutations to the potential_anagrams list
  - 
- store any hit
- return that list of hits
=end

p Anagram.new('dep').match(['eee'])