
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
  # modifies calculated 'ace' value to be 11 if it wont exceed max hand value
  if hand.flatten.include?('ace') && total <= (MAX_CARD_LIMIT - 10)
    total += 10
  end
  total
end

def bust?(total)
  total > MAX_CARD_LIMIT
end

def display_hand_details(hand, dealer_hand, player_total)
  system 'clear'
  puts "Your hand is #{hand}"
  puts "Your total hand value is #{player_total}"
  puts "Dealer's cards are [?, ?], #{dealer_hand[1..(dealer_hand.size - 1)]}"
end

def determine_winner(player_total, dealer_total)
  if player_total > dealer_total
    puts "Player's total is #{player_total}"
    puts "Dealer's total is #{dealer_total}"
    puts "Player wins!"
  elsif player_total < dealer_total
    puts "Player's total is #{player_total}"
    puts "Dealer's total is #{dealer_total}"
    puts "Dealer wins!"
  elsif player_total == dealer_total
    puts "Player's total is #{player_total}"
    puts "Dealer's total is #{dealer_total}"
    puts "It's a tie!"
  end
end

player_wins = 0
dealer_wins = 0

loop do
  deck = initialize_deck
  player_hand = deal_first_cards(deck)
  dealer_hand = deal_first_cards(deck)
  player_total = determine_total(player_hand)

  answer = ''
  loop do # player loop
    display_hand_details(player_hand, dealer_hand, player_total)
    prompt "Hit or Stay?: "
    answer = gets.downcase.chomp

    if answer == 'hit'
      player_hand << draw_card(deck)
      player_total = determine_total(player_hand)
      if bust?(player_total)
        display_hand_details(player_hand, dealer_hand, player_total)
        puts "Bust! Dealer wins!"
        break
      end
    elsif answer == 'stay' # exits player loop, moves to dealer loop
      break
    end
  end

  if answer == 'stay' # dealer's turn
    dealer_total = determine_total(dealer_hand)
    while dealer_total < DEALER_STAY_LIMIT # dealer hit loop
      dealer_hand << draw_card(deck)
      dealer_total = determine_total(dealer_hand)
      if bust?(dealer_total)
        display_hand_details(player_hand, dealer_hand, player_total)
        puts "Dealer has busted! Player wins!"
        break
      end
  end

  # card comparison to determine winner when dealer stays
    if dealer_total <= MAX_CARD_LIMIT
      display_hand_details(player_hand, dealer_hand, player_total)
      puts "Dealer Staying -- Comparing Cards"
      determine_winner(player_total, dealer_total)
    end
  end

  prompt "Play again? (y/n): "
  again_response = gets.downcase.chomp
  break if again_response != 'y'
end