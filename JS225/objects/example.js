// let me = {
//   firstName: 'Jane',
//   lastName: 'Doe',
// };

let me = {};
me.firstName = 'Jane';
me.lastName = 'Doe';

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let people = {
  collection: [me, mother, father, friend],
  fullName(person) { console.log(person.firstName + ' ' + person.lastName); },
  rollCall() { this.collection.forEach(this.fullName); },
  add(person) {
    if (this.isInvalidPerson(person)) return;
    this.collection.push(person);
  },
  getIndex(person) {
    let index = -1;
    this.collection.forEach((c, i) => {
      if (c.firstName === person.firstName && c.lastName === person.lastName) index = i;
    });

    return index;
  },
  remove(person) {
    if (this.isInvalidPerson(person)) return;

    let index = this.getIndex(person);

    if (index === -1) {
      return;
    } else {
      this.collection.splice(index, 1);
    }
  },
  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  get(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },
  update(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId !== -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

// console.log(people);
// people.rollCall();

people.remove({ firstName: 'Johnn', lastName: 'Smith' });