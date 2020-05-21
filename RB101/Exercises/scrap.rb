

# You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

# For example:

# Let's say you are given the array [1,2,3,4,3,2,1]:
# Your method will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1,2,3] and the sum of the right side of the index [3,2,1] both equal 6.

# Another one:
# You are given the array [20,10,-80,10,10,15,35]
# At index 0 the left side is []
# The right side is [10,-80,10,10,15,35]
# They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
# Index 0 is the place where the left side and right side are equal.

=begin
  break the given array into two arrays
    initialize a counter starting at 0
    split the array into two halves, breaking at the index point
    sum the left half
    sum the right half
    compare the sum of halves
      if they're equal return index
      if not equal, index++ and start again

  compare their values
    if values are equal, return the point that you broke the arrays
    if not equal, try again but with the break point shifted one forward

  guard clauses for first and last index being the point
=end

def find_even_index(arr)
  i = 0
  return 0 if arr[1..-1].reduce(:+) == 0
  return (arr.size - 1) if arr[0...-1].reduce(:+) == 0

  while i < arr.size
    right = arr.slice(i+1, arr.size-i).reduce(:+)
    left = arr.slice(0, i).reduce(:+)
    return i if left == right
    i += 1
  end
  -1
end


p find_even_index([1,2,3,4,3,2,1]) == 3
p find_even_index([1,100,50,-51,1,1]) == 1
p find_even_index([1,2,3,4,5,6]) == -1
p find_even_index([20,10,30,10,10,15,35]) == 3
p find_even_index([20,10,-80,10,10,15,35]) == 0
p find_even_index([10,-80,10,10,15,35,20]) == 6
p find_even_index([-1,-2,-3,-4,-3,-2,-1]) == 3