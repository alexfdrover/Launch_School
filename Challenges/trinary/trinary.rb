
class Trinary
  BASE = 3

  def initialize(num_str)
    @num_str = num_str
  end

  def to_decimal
    return 0 if @num_str =~ /[^0-2]/
    sum = 0
    
    @num_str.chars
            .reverse
            .map(&:to_i)
            .each_with_index {|num, index| sum += num * (BASE**index)}
    sum
  end
end
