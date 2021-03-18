function isEmptyString(userName) {
  if (userName === undefined) {
    //alternatively say if userName.length === 0
    return true;
  } else {
    return false;
  }
}

function isIncluded(a, b) {
  return a.includes(b);
}

function firstCharacter(userName) {
  return userName[0];
}

function lastCharacter(userName) {
  return userName[userName.length - 1];
}

function anotherLastCharacter(word) {
  const wordLength = word.length;
  const indexOfLastLetter = wordLength - 1;
  const lastCharacter = word[indexOfLastLetter];
  return lastCharacter;
}

function capitalize(userName) {
  return userName[0].toUpperCase() + userName.slice(1);
}

console.log(isEmptyString("Rikki"));
console.log(isIncluded("John", "on"));
console.log(firstCharacter("Rikki"));
console.log(lastCharacter("Rikki"));
console.log(capitalize("rikki"));
console.log(anotherLastCharacter("Rikki"));
