// Random pass generator include Number and Lowercase chars

const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

function makePass() {
  let empty = "";
  while (empty.length < 8) {
    let random = Math.floor(Math.random() * alphabet.length);
    empty += alphabet[random];
  }
  return empty;
}
