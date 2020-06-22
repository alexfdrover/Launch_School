class CircularBuffer
  class BufferError < StandardError; end
  class BufferEmptyException < BufferError; end
  class BufferFullException < BufferError; end

  def initialize(max_size)
    @max_size = max_size
    @buffer = []
  end

  def read
    raise BufferEmptyException if @buffer.empty?
    @buffer.pop
  end

  def write(value)
    raise BufferFullException if @buffer.size == @max_size
    @buffer.prepend(value) if !value.nil?
  end

  def write!(value)
    return unless !value.nil?
    @buffer.pop if @buffer.size == @max_size
    @buffer.prepend(value)
  end

  def clear
    @buffer.clear
  end
end
