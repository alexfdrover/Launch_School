
class PerfectNumber
  def self.classify(num)
    raise RuntimeError if num < 0
    sum = (1...num).reduce(0) { |memo, n| num % n == 0 ? memo + n : memo + 0 }
    case 
    when sum == num then 'perfect'
    when sum < num  then 'deficient'
    when sum > num  then 'abundant'
    end
  end
end
