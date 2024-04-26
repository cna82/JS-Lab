/* Counting the numbers of boolean values
 */

function booleanCounter(booleanArray) {
  let countTrues = booleanArray.filter(Boolean).length;
  let countFlases = booleanArray.length - countTrues;
  return `The amount of trues is ${countTrues} and flases is ${countFlases}`;
}
