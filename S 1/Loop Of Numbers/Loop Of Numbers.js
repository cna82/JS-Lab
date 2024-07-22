/* loop of numbers */
function loopOfNumbers() {
  let sum = 0;
  for (let i = 0; ; i++) {
    let numbers = +prompt("Enter numbers to calculate sum, to exit press 0");
    sum += numbers;
    if (numbers === 0) {
      break;
    }
  }
  alert(sum);
}
loopOfNumbers();
