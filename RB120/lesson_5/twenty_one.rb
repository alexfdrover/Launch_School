
# 52 card deck with 4 suits and 13 values (2 - ace high)
# want score closest to 21 without going over. closest wins
# two players - human and dealer
# each player initially dealt two cards
# human can see both of their cards, but only one of the dealer's cards
# card values: 2-10: face, j,q,k: 10, ace: 11
# order of gameplay:
# - player turn first, can hit or stay
# -- hit means get another card
# -- keep prompting hit or stay until either bust or stay
# - dealer turn next
# -- hit until total is >= 17, then stay
# - if neither player has busted, compare card values and display results


# nouns: player, dealer, deck, card, participant, game
# verbs: hit, stay, deal, bust, calculate_total

=begin
Player
Dealer
Deck
- deal
Card
Game
- start
Module Hand
- hit
- stay
- busted?
- total
=end

require 'pry'

class Player
  def initialize
    @cards_in_hand = []
  end

  def hit(num_of_draws = 1)
    @cards_in_hand << 1
  end
end

class Dealer
  def initialize
    @cards_in_hand = []
  end

  def hit(num_of_draws = 1)
    @cards_in_hand << 1
  end
end

class Deck
  CARD_FACES = %w(2 3 4 5 6 7 8 9 10 jack queen king ace)
  CARD_SUITS = %w(hearts diamonds clubs spades)
  

  def initialize
    @undrawn_cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  end

  def draw
    @undrawn_cards.sample
  end

end

class Card; end

class Game
  attr_reader :player, :dealer, :deck

  def initialize
    @player = Player.new
    @dealer = Dealer.new
    @deck = Deck.new
  end

  def deal_cards
    player.hit(2)
    dealer.hit(2)
  end

  def start
    deal_cards
    # show_initial_cards
    # player_turn
    # dealer_turn
    # show_result
  end
end

Game.new.start