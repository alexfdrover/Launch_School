require 'date'

class Meetup
  attr_accessor :date

  SCHEDULE = { first: 0,
               second: 1,
               third: 2,
               fourth: 3,
               last: -1,
               teenth: (13..19) }

  def initialize(month, year)
    @year = year
    @month = month
    @date = Date.new(@year, @month)
  end

  def day(weekday_symbol, meetup_schedule)
    if meetup_schedule == :teenth
      teenth_logic(weekday_symbol, meetup_schedule)
    else
      date_list = []
      while date.month == @month
        date_list << date if date.send("#{weekday_symbol}?")
        self.date += 1
      end
      self.date = date_list[SCHEDULE[meetup_schedule]]
    end

    date
  end

  private

  def teenth_logic(weekday_symbol, _)
    until date.send("#{weekday_symbol}?") && (13..19).include?(date.day)
      self.date = date.next_day
    end
  end
end
