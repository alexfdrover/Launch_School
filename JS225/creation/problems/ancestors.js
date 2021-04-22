Object.prototype.ancestors = function() {
  let result = [];
  let obj = Object.getPrototypeOf(this);
  
  while (obj.name) {
    result.push(obj.name);
    obj = Object.getPrototypeOf(obj);
  }
  
  result.push('Object.prototype');
  
  return result;
};

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']