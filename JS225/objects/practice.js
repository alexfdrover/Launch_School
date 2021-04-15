let invoices = {
  unpaid: [],
  paid: [],
  add(clientName, amount) {
    let newEntry = {
      clientName,
      amount,
    };
    this.unpaid.push(newEntry);
  },
  totalDue() {
    return this.unpaid.reduce((acc, invoice) => {
      return acc + invoice.amount;
    }, 0);
  },
  payInvoice(name) {
    let newUnpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.clientName === name) {
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });

    this.unpaid = newUnpaid;
  },
  totalPaid() {
    return this.paid.reduce((acc, invoice) => {
      return acc + invoice.amount;
    }, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
