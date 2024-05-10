/* Counting the numbers of boolean values
 */

function booleanCounter(booleanArray) {
  let countTrues = booleanArray.filter(Boolean).length;
  let countFlases = booleanArray.length - countTrues;
  return `The amount of trues is ${countTrues} and falses is ${countFlases}`;
}
// Option 2
function attendance(arr) {
  let count = 0;
  for (const item of arr) {
    if (item) {
      count++;
    }
  }
  return count;
}
