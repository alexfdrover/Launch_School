# how_many?.rb
# https://launchschool.com/exercises/d5c51b39

def count_occurences(vehicles)
  vehicle_hash = Hash.new(0)
  vehicles.each {|x| vehicle_hash[x.downcase] += 1}
  vehicle_hash.each {|k, v| puts "#{k} => #{v}"}
end

vehicles = %w(car car truck car SUV suv truck motorcycle motorcycle car truck)

count_occurences(vehicles)
