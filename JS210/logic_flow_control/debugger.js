function hello(name) {
  console.log('Hello, ' + name + '!');
}

function greetEveryone() {
  var names = ["Darleen", "Sam", "Prasad", "Ming"];

  for (var i = 0; i < names.length; i += 1) {
    var name = names[i];
    hello(name);
    hi(name);
  }
}

greetEveryone();