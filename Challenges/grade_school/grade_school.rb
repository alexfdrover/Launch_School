=begin
problem
  store student name and the grade they're in
  add student to grade
  return a list of all students in a grade
  return a sorted list of all students in all grades
    grade low-high, students in value sorted alphabetically
  students all have first name only
examples
  given in test file
algo
  make a school object that starts empty
  add students by name and grade
    add them to a hash where the grade is the key
    value is an array with all names as elements

=end

class School
  def initialize
    @school = Hash.new {|_,grade| @school[grade] = []}
  end

  def add(name, grade)
    @school[grade] << name
  end

  def to_h
    @school.sort_by do |grade, students|
      students.sort!
      grade
    end.to_h
  end

  def grade(grade)
    @school[grade]
  end
end
