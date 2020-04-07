# mortgage_calculator.rb

# Definitions
def integer?(input)
  (input == input.to_i.to_s) && (input.to_i > 0)
end

def float?(input)
  (/\d/.match(input)) && (/^\d*\.?\d*/.match(input)) && (input.to_f >= 0)
end

def loan_duration_calc_months(loan_duration_years)
  loan_duration_years.to_f * 12
end

def interest_rate_calc_months(apr)
  apr.to_f / (100 * 12)
end

def monthly_payment_calc(loan, interest_months, loan_dur_months)
  loan.to_f * (interest_months / (1 - (1 + interest_months)**(-loan_dur_months)))
end

# Loan Amount loop
loan_amount = nil
loop do
  puts "Please enter the desired loan amount (Must be a positive number): "
  loan_amount = gets.chomp

  if float?(loan_amount)
    break
  else
    puts "Invalid number. Amount must be a positive number."
  end
end

# APR loop
apr = nil
loop do
  puts "Please enter the interest (APR as a % - cannot be negative): "
  apr = gets.chomp

  if float?(apr)
    break
  else
    puts "Invalid number. Amount must be a positive percentage"
  end
end

# Loan Duration (years) loop
loan_duration_years = nil
loop do
  puts "Please enter the loan duration in years (number cannot be negative): "
  loan_duration_years = gets.chomp

  if float?(loan_duration_years)
    break
  else
    puts "Invalid number. Number cannot be negative."
  end
end

loan_duration_months = loan_duration_calc_months(loan_duration_years)
puts "Your loan duration in months is: #{loan_duration_months}"

interest_rate_months = interest_rate_calc_months(apr)
puts "Your monthly interest rate is: #{interest_rate_months * 100}%"

monthly_payment = monthly_payment_calc(loan_amount, interest_rate_months, loan_duration_months)
puts "Your monthly payment is $ #{format('%02.2f', monthly_payment)}."
