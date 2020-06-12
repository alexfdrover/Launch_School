
# Write a program that will take a string of digits and give you all the possible consecutive number series of length n in that string.
# input: string of digits
# output: array of subarrays
# subarrays are of size n
# each subarray is a return of each_cons(n)

class Series
  def initialize(num_string)
    @num_array = num_string.chars.map{ |char| char.to_i }
    @container = []
  end

  def slices(n)
    raise ArgumentError if n > @num_array.size
    @num_array.each_cons(n) { |nums| @container << nums }
    @container
  end
end