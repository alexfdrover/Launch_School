function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

let methods = {
   foo: function () {
     console.log('hello');
   },
};

iterate([1, 2, 3], methods.foo);