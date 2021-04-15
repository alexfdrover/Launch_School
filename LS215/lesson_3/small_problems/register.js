/**
 * implement the following commands in your stack machine interpetation:
 * rules:
 * init stack to []
 * init register to 0
 * all operations are integer operations
 * inputs are strings, and are all valid commands behaving normally
 * 
 * n - puts the value in the register
 * PUSH - push the register value onto the stack, leaving the value in the register
 * ADD - pop from stack, add to register, place in register
 * SUB - pop from stack, sub from register, place in register
 * MULT - pop from stack, mult with register, place in register
 * DIV - pop from stack, divide from the register, place in register
 * MOD - pop from stack, divide from the register, place the integer remainder in register
 * POP - remove topmost item from stack and place in register
 * PRINT - print register to screen
 * 
 * algo
 * split input into array of strings
 * for each input, if the value is a number then make the register that number
 * otherwise, perform the action corresponding with the token
 */

function minilang(input) {
  let register = 0;
  let stack = [];
  let operations = input.split(' ');

  operations.forEach(token => {
    switch (token) {
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      default:
        register = Number(token);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)