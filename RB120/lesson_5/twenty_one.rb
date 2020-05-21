
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
  attr_reader :cards_in_hand

  def initialize
    @cards_in_hand = []
  end
end

class Dealer
  attr_reader :cards_in_hand

  def initialize
    @cards_in_hand = []
  end
end

class Deck
  attr_reader :undrawn_cards
  CARD_FACES = %w(2 3 4 5 6 7 8 9 10 jack queen king ace)
  CARD_SUITS = %w(hearts diamonds clubs spades)
  
  def initialize
    @undrawn_cards = []
    load_deck_and_shuffle
  end

  def load_deck_and_shuffle
    CARD_FACES.each do |card_face|
      CARD_SUITS.each do |card_suit|
        @undrawn_cards << Card.new(card_face, card_suit)
      end
    end
    @undrawn_cards.shuffle!
  end

  def hit(participant, amount_of_cards)
    participant.cards_in_hand << @undrawn_cards.pop(amount_of_cards)
  end
end

class Card
  def initialize(card_face, card_suit)
    @card_face = card_face
    @card_suit = card_suit
  end
end

class Game
  attr_reader :player, :dealer, :deck

  def initialize
    @player = Player.new
    @dealer = Dealer.new
    @deck = Deck.new
  end

  def deal_cards
    deck.hit(player, 2)
    deck.hit(dealer, 2)
    binding.pry
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