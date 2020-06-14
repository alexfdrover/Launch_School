
class Phrase
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    @phrase.gsub(/[']?[^0-9a-z'][']?/i, ' ').downcase.split.tally
  end
end
