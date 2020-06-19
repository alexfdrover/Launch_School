class Luhn
  attr_accessor :input

  def initialize(input)
    @input = input
  end

  def addends
    digit_array = @input.digits.map.with_index do |digit, idx|
      idx.odd? ? digit * 2 : digit
    end

    digit_array.map! do |digit|
      digit > 9 ? digit - 9 : digit
    end.reverse
  end

  def checksum
    addends.reduce(:+)
  end

  def self.create(input)
    number = Luhn.new(input * 10)
    while !number.valid?
      number.input += 1
    end
    number.input
  end

  def valid?
    checksum % 10 == 0
  end
end
