function newStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(item => console.log(item));
    },
  };
}

