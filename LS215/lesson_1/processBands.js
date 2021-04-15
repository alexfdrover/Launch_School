let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  processCountry(data);
  processPeriods(data);
  processCapitalization(data);
  return data;
}

function processCountry(data) {
  data.forEach(band => band.country = 'Canada');
}

function processPeriods(data) {
  data.forEach(band => band.name = band.name.replace(/[.]/g, ''));
}

function processCapitalization(data) {
  function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1);
  }

  data.forEach(band => {
    let words = band.name.split(' ');
    words = words.map(word => capitalizeName(word));
    band.name = words.join(' ');
  });
}

console.log(processBands(bands));

/*
should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/