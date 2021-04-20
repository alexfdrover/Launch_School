function makeList() {
  let items = [];
  
  // return function(arg) {
  //   if (arg === undefined) {
  //     if (list.length === 0) {
  //       console.log('The list is empty.');
  //       return;
  //     }
  //     list.forEach(item => {
  //       console.log(item);
  //     });
  //   } else if (typeof arg === 'string' && !list.includes(arg)) {
  //     list.push(arg);
  //     console.log(`${arg} added!`);
  //   } else if (typeof arg === 'string' && list.includes(arg)) {
  //     list.splice((list.indexOf(arg)), 1);
  //     console.log(`${arg} removed!`);
  //   }
  // };

  return {
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => {
          console.log(item);
        });
      }
    },
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
    remove(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      }
    },
  };
}

let list = makeList();

list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn

console.log(list.items);            // items accessible from outside object
//['corn']               // since it is an object property