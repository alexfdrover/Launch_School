
class Octal
  BASE = 8
  def initialize(octal_num)
    @octal_num = octal_num
  end

  def to_decimal
    return 0 if @octal_num =~ /[^0-7]/

    exp = @octal_num.length - 1
    sum = 0

    @octal_num.each_char do |char|
      sum += char.to_i * (BASE**exp)
      exp -= 1
    end
    sum
  end
end
