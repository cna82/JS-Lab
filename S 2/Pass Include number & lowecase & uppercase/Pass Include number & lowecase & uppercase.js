// Random pass generator include Number and Lowercase and Uppercase chars

const pattern =
  "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function makePass() {
  let empty = "";
  debugger;
  while (empty.length < 8) {
    let random = Math.floor(Math.random() * pattern.length);
    empty += pattern[random];
  }
  return empty;
}
