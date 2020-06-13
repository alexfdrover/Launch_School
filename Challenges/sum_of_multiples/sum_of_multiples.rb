
class SumOfMultiples
  def initialize(*args)
    @multiples = [*args]
  end

  def to(n)
    self.class.to(n, @multiples)
  end

  def self.to(n, multiples = [3, 5])
    return 0 if n == 1
    container = []
    multiples.each do |num|
      num.step(by: num, to: n-1) { |int| container << int }
    end
    container.uniq.reduce(:+)
  end

  def self.to(n, multiples = [3, 5])
    return 0 if n == 1
    
    (1...n).select { |num| num % }
    
  end
end

