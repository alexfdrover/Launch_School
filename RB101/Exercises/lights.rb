
def lights_on(num)
  list_on = []
  (1..num).each do |n|
    amount_of_factors = determine_factors(n).count
    list_on << n if amount_of_factors.odd?
  end
  list_on
end

def determine_factors(n)
  factors = []
  (1..n).each do |i|
    factors << i if (n % i == 0)
  end
  factors
end

p lights_on(16)