
class SumOfMultiples
  def initialize(*args)
    @multiples = [*args]
  end

  def to(n)
    return 0 if n == 1
    container = []
    @multiples.each do |num|
      num.step(by: num, to: n-1) { |int| container << int }
    end
    container.uniq.reduce(:+)
  end

  def self.to(n)
    return 0 if n == 1
    container = []
    [3,5].each do |num|
      num.step(by: num, to: n-1) { |int| container << int }
    end
    container.uniq.reduce(:+)
  end
end

