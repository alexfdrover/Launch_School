let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    return 'some name';
  }

  function validatePassword(password) {
    return (password === userPassword);
  }

  return {
    init: function(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },
    reanonymize(password) {
      if (validatePassword(password)) {
        this.displayName = 'new name';
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    resetPassword(oldPassword, newPassword) {
      if (validatePassword(oldPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    firstName(password) {
      return validatePassword(password) ? userFirstName : 'Invalid Password';
    },
    lastName(password) {
      return validatePassword(password) ? userLastName : 'Invalid Password';
    },
    email(password) {
      return validatePassword(password) ? userEmail : 'Invalid Password';
    },
    displayName: this.displayName,
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true
console.log(displayName === fooBar.displayName);   // logs false