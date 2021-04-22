class ItemCreator {
  constructor(itemName, category, quantity) {
    if (!this.areValidInputs(itemName, category, quantity)) return { notValid: true };
    this.skuCode = this.getFirstPart(itemName).toUpperCase() + category.slice(0, 2).toUpperCase();
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
  }

  getFirstPart(itemName) {
   if (itemName.split(' ').length === 2 && itemName.split(' ')[0].length === 2) {
     return itemName.slice(0, 2) + itemName[3];
   } else {
     return itemName.slice(0, 3);
   }
  }

  isValidQuantity(quantity) {
    return (quantity === undefined) ? false : true;
  }

  isValidCategory(category) {
    return (category.length > 4 && category.split(' ').length === 1);
  }

  isValidName(itemName) {
    let nonSpaceChars = itemName.split(' ').reduce((acc, substr) => {
      return acc += substr;
    });

    return (nonSpaceChars.length > 4);
  }

  areValidInputs(itemName, category, quantity) {
    return (this.isValidQuantity(quantity) && this.isValidCategory(category) && this.isValidName(itemName));
  }
}

class ItemManager {
  constructor() {}

  static items = [];

  static create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.hasOwnProperty('notValid')) {
      return false;
    } else {
      this.items.push(item);
    }
  }

  static findItem(skuCode) {
    return this.items.filter(item => item.skuCode === skuCode)[0];
  }

  static update(skuCode, updateObj) {
    let item = this.findItem(skuCode);
    Object.assign(item, updateObj);
  }

  static delete(skuCode) {
    let itemToDelete = this.findItem(skuCode);
    this.items = this.items.filter(item => item !== itemToDelete);
  }

  static inStock() {
    return this.items.filter(item => item.quantity > 0);
  }

  static itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
}

class ReportManager {
  constructor() {}

  static items = [];

  static init(ItemManager) {
    this.items = ItemManager.items;
  }

  static reportInStock() {
    ItemManager.inStock().forEach(item => console.log(item));
  }

  static createReporter(sku) {
    return {
      itemInfo() {
        let item = ItemManager.findItem(sku);
        Object.getOwnPropertyNames(item).forEach(prop => {
          console.log(`${prop}: ${item[prop]}`);
        });
      },
    }
  }

}


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// ItemManager.items;       
// // returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

// ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10