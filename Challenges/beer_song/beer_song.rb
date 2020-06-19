class BeerSong
  def initialize
    @verse_lookup = { 0 => ZeroVerse,
                      1 => OneVerse,
                      2 => TwoVerse,
                      3..99 => DefaultVerse
                    }
  end

  def verse(number)
    @verse_lookup[number].verse(number)
  end
end

class ZeroVerse
  def self.verse(number)
  end
end

class OneVerse
  def self.verse(number)
  end
end

class TwoVerse
  def self.verse(number)
  end
end

class DefaultVerse
  def self.verse(number)
  end
end