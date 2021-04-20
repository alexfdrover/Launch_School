function createInvoice(services = {}) {
  let phone = services.phone || 3000;
  let internet = services.internet || 5500;
  let payments = [];

  return {
    phone,
    internet,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      payments.push(payment);
    },
    addPayments(paymentArr) {
      paymentArr.forEach(payment => this.addPayment(payment), this);
    },
    amountDue() {
      return payments.reduce((acc, payment) => acc -= payment.total(), this.total());
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0