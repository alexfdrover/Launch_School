
def odd_words(input)
  word_array = input.strip.split
  flipped_array = word_array.map!.with_index {|word, index| index.odd? ? word.reverse : word }
  new_sentence = flipped_array.join(' ')
  new_sentence.gsub!(/[\s]+\./, '.')
  new_sentence
end
