// Random pass generator include Number and Lowercase and Uppercase chars

const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function makePass() {
  let empty = "";
  while (empty.length < 8) {
    let random = Math.floor(Math.random() * alphabet.length);
    empty += alphabet[random];
  }
  return empty;
}
