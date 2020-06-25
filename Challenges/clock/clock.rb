class Clock
  attr_accessor :minutes, :hours

  def initialize(hours, minutes)
    @hours = hours
    @minutes = minutes
  end

  def self.at(hours, minutes = 0)
    Clock.new(hours, minutes)
  end

  def to_s
    format("%0.02d", hours.to_s) + ":" +
      format("%0.02d", minutes.to_s)
  end

  def +(int)
    self.minutes += int
    adjust_minutes
    adjust_hours
    self
  end

  def -(int)
    self.minutes -= int
    adjust_minutes
    adjust_hours
    self
  end

  def ==(other_clock)
    hours == other_clock.hours && minutes == other_clock.minutes
  end

  private

  def adjust_minutes
    hour_change = (minutes / 60).abs
    minute_change = (minutes / 60).abs * 60
    
    if minutes >= 60
      self.hours += hour_change
      self.minutes -= minute_change
    elsif minutes < 0
      self.hours -= hour_change
      self.minutes += minute_change
    end
  end

  def adjust_hours
    if hours >= 24
      self.hours -= 24
    elsif hours < 0
      self.hours += 24
    end
  end
end
