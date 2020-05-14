module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end

class Vehicle
  attr_accessor :color, :speed
  attr_reader :year, :model

  @@num_of_vehicles = 0

  def self.vehicle_number
    @@num_of_vehicles
  end

  def self.gas_mileage(gallons, miles)
    "#{miles / gallons} miles per gallon of gas"
  end

  def initialize(y, m, c)
    @year = y
    self.color = c
    @model = m
    self.speed = 0
    @@num_of_vehicles += 1
  end

  def speed_up(number)
    self.speed += number
  end

  def brake(number)
    self.speed -= number
  end

  def current_speed
    puts "You are currently going #{self.speed}"
  end

  def shut_down
    self.speed = 0
  end

  def spray_paint(color)
    self.color = color
  end

  def age
    "The #{self.model} is #{determine_age} years old"
  end

  private

  def determine_age
    Time.new.year - self.year
  end
end

class MyCar < Vehicle
  NUMBER_OF_DOORS = 4

  # def to_s
  #   "The #{color} #{year} #{model} is moving at #{speed} mph"
  # end
end

class MyTruck < Vehicle
  include Towable

  NUMBER_OF_DOORS = 2

  # def to_s
  #   "The #{color} #{year} #{model} is moving at #{speed} mph"
  # end
end

car = MyCar.new(2010, 'Ford Focus', 'red')
p car.age