class SecretHandshake
  COMMANDS = ['wink', 'double blink', 'close your eyes', 'jump']

  def initialize(input)
    @input = input
  end

  def commands
    return [] if validation_error?
    binary_conversion
    digits = @binary.chars.reverse
    actions = COMMANDS.select.with_index { |_, idx| digits[idx] == '1' }
    actions.reverse! if @binary.size == 5 && @binary[0] == '1'
    actions
  end

  private

  def binary_conversion
    @binary = @input.to_i.to_s(2)
  end

  def validation_error?
    @input.to_s.match?(/[^0-9]/)
  end
end
