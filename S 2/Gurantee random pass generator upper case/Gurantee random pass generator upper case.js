
// Password generator with gurantee contains:letter(upper and lower case) and number

function rdmNum(x, y) {
  let distance = y - x + 1;
  let random = Math.floor(Math.random() * distance + x);
  return random;
}

function rdmChar(x, y) {
  let random = String.fromCharCode(rdmNum(x, y));
  return random;
}

function makePass2() {
  let empty = "";
  while (empty.length < 8) {
    let randomNumber = rdmNum(0, 9);
    let randomCharUppercase = rdmChar(65, 90);
    let randomCharLowercase = rdmChar(97, 122);
    empty += randomNumber + randomCharLowercase + randomCharUppercase;
  }
  return empty;
}
