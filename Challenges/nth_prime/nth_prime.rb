class Prime
  def self.nth(n)
    raise ArgumentError if n < 1
    generate_primes(n).fetch(n - 1)
  end

  def self.generate_primes(n)
    i = 3
    prime_array = [2]

    loop do
      prime_array << i if prime?(i)
      i += 2
      break if prime_array.length >= n
    end

    prime_array
  end

  def self.prime?(i)
    3.step(by: 2, to: i) do |element|
      if i % element == 0 && element != i
        return false
      end
    end
    true
  end
end
