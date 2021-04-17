function makeList() {
  let list = [];
  
  return function(arg) {
    if (arg === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
        return;
      }
      list.forEach(item => {
        console.log(item);
      });
    } else if (typeof arg === 'string' && !list.includes(arg)) {
      list.push(arg);
      console.log(`${arg} added!`);
    } else if (typeof arg === 'string' && list.includes(arg)) {
      list.splice((list.indexOf(arg)), 1);
      console.log(`${arg} removed!`);
    }
  };
}

let list = makeList();

list();
// The list is empty.

list('make breakfast');
// make breakfast added!

list('read book');
// read book added!

list();
// make breakfast
// read book

list('make breakfast');
// make breakfast removed!

list();
// read book