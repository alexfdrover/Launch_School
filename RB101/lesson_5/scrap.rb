
customer_orders = [
  {
    customer_id: 12,
    customer_name: 'Emma Lopez',
    orders: [
      { order_fulfilled: true, order_value: 135.99 },
      { order_fulfilled: true, order_value: 289.49 },
      { order_fulfilled: false, order_value: 58.00 }
    ]
  },
  {
    customer_id: 32,
    customer_name: 'Michael Richards',
    orders: [
      { order_fulfilled: true, order_value: 120.00 },
      { order_fulfilled: false, order_value: 85.65 }
    ]
  },
  # rest of data...
]


all_orders = []

customer_orders.each do |customer_data|
  cust_arr = [
    [:customer_id, customer_data[:customer_id]],
    [:customer_name, customer_data[:customer_name]],
    [:total_order_value]
  ]

  order_value = 0
  customer_data[:orders].each do |order|
    order_value += order[:order_value]
  end

  cust_arr[2] << order_value

  all_orders << cust_arr
end

p all_orders