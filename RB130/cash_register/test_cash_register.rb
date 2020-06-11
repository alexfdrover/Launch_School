
require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!
require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(1000)
    @transaction = Transaction.new(10)
    @transaction.amount_paid = 20
  end

  def test_accept_money
    previous = @register.total_money
    @register.accept_money(@transaction)
    current = @register.total_money
    assert_equal previous+@transaction.amount_paid, current
  end

  def test_change
    money_back = @register.change(@transaction)
    assert_equal @transaction.amount_paid - @transaction.item_cost, money_back
  end

  def test_give_receipt
    assert_output("You've paid $#{@transaction.item_cost}.\n") do
      @register.give_receipt(@transaction)
    end
  end

end

class TransactionTest < Minitest::Test
  def test_prompt_for_payment
    transaction = Transaction.new(30)
    input = StringIO.new('30\n')
    output = StringIO.new
    transaction.prompt_for_payment(input: input, output: output)
    assert_equal 30, transaction.amount_paid
  end
end