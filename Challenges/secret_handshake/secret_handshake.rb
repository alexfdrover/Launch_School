class SecretHandshake
  attr_accessor :binary

  def initialize(input)
    @input = input
    @actions = []
  end

  def commands
    return @actions if validation_error?
    binary_conversion
    digits = @binary.chars

    add('wink') if digits.pop == '1'
    add('double blink') if digits.pop == '1'
    add('close your eyes') if digits.pop == '1'
    add('jump') if digits.pop == '1'
    @actions.reverse! if digits.pop == '1'
    @actions
  end

  private

  def add(action)
    @actions << action
  end

  def binary_conversion
    @binary = @input.to_i.to_s(2)
  end

  def validation_error?
    @input.to_s.match?(/[^0-9]/)
  end
end
