=begin
  Rule 1: If word begins with vowel, add 'ay' to end
    Exception: (x + cons) is treated like a vowel
               (y + cons) is treated like a vowel
  Rule 2: If word begins with consonant(s), move to end, add 'ay'
    Exception: qu is treated like a consonant
  Input: string
  Output: string
  Examples: 
    apple => appleay
    ear   => earay
    pig   => igpay
    koala => oalakay
    chair => airchay
  Data Structure: array of strings
  Algo:
  take word as input
  break word into characters
  if word starts with vowel, add 'ay' to end of word
  if word starts with consonant, keep taking letters until a vowel,
    then move them all to end of word, and add 'ay'
  return the new word
=end

class PigLatin
  VOWELS = %w(a e i o u)

  def self.translate(sentence)
    words = sentence.split
    outer_container = []
    words.each do |word|
      @input = word.chars

      if VOWELS.include?(@input[0]) || xy_exception
        @input.append('ay')
      else
        letters = []
        while !VOWELS.include?(@input[0]) || qu_exception
          if qu_exception
            letters << @input.shift(2)
          else
            letters << @input.shift
          end
        end
        @input.append(letters.join, 'ay')
      end

      outer_container << @input.join
    end
    outer_container.join(' ')
  end

  def self.xy_exception
    (@input[0] == 'x' || @input[0] == 'y') && !VOWELS.include?(@input[1])
  end

  def self.qu_exception
    @input[0, 2] == ['q', 'u']
  end
end