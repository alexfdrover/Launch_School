require 'pry'
class DNA
  def initialize(first_strand)
    @first_strand = first_strand
  end

  def hamming_distance(second_strand)
    @second_strand = second_strand
    expand_strand if different_lengths?
    count_differences
  end

  private

  def different_lengths?
    @first_strand.length != @second_strand.length
  end

  def expand_strand
    max_length = [@first_strand.length, @second_strand.length].max
    @first_strand = @first_strand.ljust(max_length, '-')
    @second_strand = @second_strand.ljust(max_length, '-')
  end

  def count_differences
    index = 0
    counter = 0
    first_chars = @first_strand.chars
    second_chars = @second_strand.chars
    while index < @first_strand.length
      counter += 1 if (first_chars[index] != second_chars[index]) && first_chars[index] != '-' && second_chars[index] != '-'
      index += 1
    end
    counter
  end
end