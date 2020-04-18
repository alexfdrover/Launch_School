
def center_of(string)
  if string.size.odd?
    position = (string.size - 1) / 2
    string[position]
  else
    first_position = string.size / 2
    second_position = first_position - 1
    string[second_position, 2]
  end
end


p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'