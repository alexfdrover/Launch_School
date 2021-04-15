/*
PROBLEM
input: integer representing the length of the two major axes
output: log a diamond of "*"s

rules
input integer is an odd number
each line contains an odd number of stars
1 then 3 then 5 etc until n, the back again

structure
three sections
  1 to n-1
  n
  n-1 to 1
  
algo
while lines printed are less than n
  change in stars is '+2'
  if stars !== n
    print (n - stars) / 2 ' 's, then stars '*'s, then (n - stars) / 2 ' 's
    change in stars
  if stars === n
    print n '*'s
    set change in stars to '-2'
    change in stars
*/

function diamond(n) {
  let linesPrinted = 0;
  let starsChange = 2;
  let stars = 1;

  while (linesPrinted < n) {
    let spaces = ' '.repeat((n - stars) / 2);
    console.log(spaces + '*'.repeat(stars) + spaces);
    
    if (n === stars) starsChange *= -1;
    stars += starsChange;
    linesPrinted += 1;
  }
}

diamond(7);