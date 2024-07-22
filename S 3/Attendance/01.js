/* Counting the numbers of boolean values
 */
 
// option I 
function handleAttendance(list) {
  let countTrues = list.filter(x=>x===true).length;
  let countFlases = list.length - countTrues;
  return `The amount of presents is ${countTrues} and absents  ${countFlases}`;
}
// Option II
function attendance(arr) {
  let count = 0;
  for (const item of arr) {
    if (item) {
      count++;
    }
  }
  return count;
}
