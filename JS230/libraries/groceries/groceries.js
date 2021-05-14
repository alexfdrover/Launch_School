document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let quantity = document.querySelector('#quantity').value || '1';

    let ul = document.querySelector('#grocery-list');
    let li = document.createElement('li');
    li.textContent = `${quantity} ${name}`;
    ul.appendChild(li);

    form.reset();
  });
});