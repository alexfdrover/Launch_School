function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(greeting + ', ' + name + '!');
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!


function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'Hello');
let sayHi = partial(greet, 'Hi');
sayHello('Brandon');
//Hello, Brandon!
sayHi('Sarah');
//Hi, Sarah!