function dateSuffix(day) {
  let lastDigit = day % 10;
  let suffix;
  if (day === 11 || day === 12 || day === 13) suffix = 'th';

  switch (lastDigit) {
    case (1):
      suffix = 'st';
      break;
    case (2):
      suffix = 'nd';
      break;
    case (3):
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }

  return day + suffix;
}

function formattedDate(today) {
  let day = formattedDay(today);
  let month = formattedMonth(today);

  console.log(`Today\'s date is ${day}, ${month} ${dateSuffix(today.getDate())}`);
}

function formattedDay(today) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()];
}

function formattedMonth(today) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()];
}

let today = new Date();
// formattedDate(today);

let tomorrow = new Date();
