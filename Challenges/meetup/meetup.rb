require 'date'

class Meetup
  attr_accessor :date

  # rubocop:disable Layout/HashAlignment
  WEEKDAY = { monday:    :monday?,
              tuesday:   :tuesday?,
              wednesday: :wednesday?,
              thursday:  :thursday?,
              friday:    :friday?,
              saturday:  :saturday?,
              sunday:    :sunday? }

  SCHEDULE = { first:  0, second: 1,  third:  2,
               fourth: 3, last:   -1, teenth: (13..19) }
  # rubocop:enable Layout/HashAlignment

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
        date_list << date if date.send(WEEKDAY[weekday_symbol])
        self.date = date.next_day
      end
      self.date = date_list[SCHEDULE[meetup_schedule]]
    end

    date
  end

  private

  def teenth_logic(weekday_symbol, meetup_schedule)
    until date.send(WEEKDAY[weekday_symbol]) && SCHEDULE[meetup_schedule].include?(date.day)
      self.date = date.next_day
    end
  end
end
