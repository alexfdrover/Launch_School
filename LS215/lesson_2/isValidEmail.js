/* 
one '@'
local part - only :alnum:
domain part - two or more components with a single dot between them
  each component must contain only a-zA-z
algo:
  /split on the '@' to delineate local and domain
  /evaluate local for exclusively :alnum:
  /evaluate domain for exclusively a-zA-z
  /evaluate domain for at least one '.'
  /.split domain on '.'
  /.evaluate each segment length greater than 0
if any of the above evaluates are false, return false overall
*/

function isValidEmail(email) {
  let emailComponents = email.split('@');
  let local = emailComponents[0];
  let domain = emailComponents[1];
  let domainSegments = domain.split('.');

  if (local.match(/[^a-z0-9]/gi)) {
    return false;
  } else if (domain === domainSegments[0]) {
    return false;
  } else if (domain.match(/[^a-z\.]/gi)) {
    return false;
  }

  for (let i = 0; i < domainSegments.length; i += 1) {
    if (domainSegments[i].length < 1) return false;
  }

  return true;
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false