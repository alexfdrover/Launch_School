
def transpose(matrix)
  new_matrix = []
  counter = 0
  while counter < matrix[0].size
    sub_array = []
    matrix.each { |sub| sub_array << sub[counter] }
    new_matrix << sub_array
    counter += 1
  end
  new_matrix
end

def rotate90(matrix)
  new_matrix = []
  column_counter = matrix[0].size
  row_counter = 0
  while column_counter > 0
    sub_arr = []
    matrix.each { |sub| sub_arr << sub[row_counter]}
    new_matrix << sub_arr.reverse
    row_counter += 1
    column_counter -= 1
  end

  new_matrix
end

matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

new_matrix1 = rotate90(matrix1)
new_matrix2 = rotate90(matrix2)
new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
p new_matrix3 == matrix2