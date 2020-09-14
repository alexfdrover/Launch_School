/* 
problem
given message of a9 and assorted characters
return string with assorted characters replaced with spaces
should not have consecutive spaces

examples
below

data
string, loops, characters, regex?

algo
create string container
create regex object: /[a-z0-9]/i
iterate through string
  if current character is a9, add to container
  if current character is ^a9, check last container character
    if last container character is ' ', do nothing
    if last container character !== ' ', add ' ' to container
return container

*/

function cleanUp(message) {
  let stringContainer = '';
  let regex = /[^a-z0-9]/i;

  for (let i = 0; i < message.length; i += 1) {
    if (message[i].match(regex) && !stringContainer.endsWith(' ')) {
      stringContainer += ' ';
    } else if (!message[i].match(regex)) {
      stringContainer += message[i];
    }
  }

  return stringContainer;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
