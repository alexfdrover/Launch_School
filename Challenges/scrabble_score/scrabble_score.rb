
class Scrabble
  attr_reader :input_string

  VALUE_TABLE = { %w(a e i o u l n r s t) => 1,
                  %w(d g)                 => 2,
                  %w(b c m p)             => 3,
                  %w(f h v w y)           => 4,
                  %w(k)                   => 5,
                  %w(j x)                 => 8,
                  %w(q z)                 => 10 }

  def initialize(input_string)
    @input_string = input_string
  end

  def self.score(input_string)
    Scrabble.new(input_string).score
  end

  def score
    return 0 if input_invalid?
    word_letters = input_string.downcase.chars
    score = 0
    word_letters.each { |char| VALUE_TABLE.each {|k,v| score += v if k.include?(char)}}
    score
  end

  private

  def input_invalid?
    (input_string == nil) || input_string.match?(/[^a-z]/i) || input_string.empty?
  end
end