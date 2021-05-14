document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let operand1 = +document.querySelector('#first-number').value;
    let operand2 = +document.querySelector('#second-number').value;
    let operator = document.querySelector('#operator').value
    let result

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      
      default:
        break;
    }

    document.querySelector('#result').textContent = String(result);;
  });
});