function evenOrOdd(input) {
  if (!Number.isInteger(input)) {
    console.log('Error');
    return;
  }

  console.log((input % 2) > 0 ? 'odd' : 'even');
}

evenOrOdd('12');