
CARD_VALUES = { '2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6, '7' => 7,
                '8' => 8, '9' => 9, '10' => 10, 'jack' => 10, 'queen' => 10,
                'king' => 10, 'ace' => 1 }
SUITS = ['D', 'S', 'C', 'H']
DEALER_STAY_LIMIT = 17
MAX_CARD_LIMIT = 21

def prompt(msg)
  puts "==> #{msg}"
end

def initialize_deck
  SUITS.product(CARD_VALUES.keys)
end

def draw_card(deck)
  card = deck.sample
  deck.delete(card)
  card
end

def deal_first_cards(deck)
  [draw_card(deck), draw_card(deck)]
end

def determine_total(hand)
  total = 0
  hand.each { |card| total += CARD_VALUES.values_at(card[1])[0] }
  if hand.flatten.include?('ace') && total <= 11
    total += 10
  end
  total
end

def bust?(hand)
  determine_total(hand) > 21
end

def display_hand_details(hand, dealer_hand)
  system 'clear'
  puts "Your hand is #{hand}"
  puts "Your total hand value is #{determine_total(hand)}"
  puts "Dealer's visible card is #{dealer_hand[0]}"
end

def determine_winner(player_hand, dealer_hand)
  if determine_total(player_hand) > determine_total(dealer_hand)
    puts "Player's total is #{determine_total(player_hand)}"
    puts "Dealer's total is #{determine_total(dealer_hand)}"
    puts "Player wins!"
  elsif determine_total(player_hand) < determine_total(dealer_hand)
    puts "Player's total is #{determine_total(player_hand)}"
    puts "Dealer's total is #{determine_total(dealer_hand)}"
    puts "Dealer wins!"
  elsif determine_total(player_hand) == determine_total(dealer_hand)
    puts "Player's total is #{determine_total(player_hand)}"
    puts "Dealer's total is #{determine_total(dealer_hand)}"
    puts "It's a tie!"
  end
end

deck = initialize_deck
player_hand = deal_first_cards(deck)
dealer_hand = deal_first_cards(deck)

answer = ''
loop do # player loop
  display_hand_details(player_hand, dealer_hand)
  prompt "Hit or Stay?: "
  answer = gets.downcase.chomp

  if answer == 'hit'
    player_hand << draw_card(deck)
    if bust?(player_hand)
      display_hand_details(player_hand, dealer_hand)
      puts "Bust! Dealer wins!"
      break
    end
  elsif answer == 'stay' # exits player loop, moves to dealer loop
    break
  end
end

if answer == 'stay' # dealer's turn
  while determine_total(dealer_hand) < DEALER_STAY_LIMIT # dealer hit loop
    dealer_hand << draw_card(deck)
    if bust?(dealer_hand)
      puts "Dealer has busted! Player wins!"
      break
    end
  end

  # card comparison to determine winner when dealer stays
  if determine_total(dealer_hand) <= MAX_CARD_LIMIT
    puts "Dealer Staying -- Comparing Cards"
    determine_winner(player_hand, dealer_hand)
  end
end
