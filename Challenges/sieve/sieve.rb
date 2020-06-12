

class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    marked = []
    primes = []
    2.upto(@limit) do |number|
      primes << number if !marked.include?(number)
      number.step(by: number, to: @limit) do |int| 
        marked << int if !marked.include?(int)
      end
    end
    primes
  end
end

sieve = Sieve.new(15)
p sieve.primes