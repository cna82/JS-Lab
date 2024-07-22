/* Distance Of Elevator
 */
function calcDistance(left, right, current) {
  // Option I 
  let leftDistance = Math.abs(current - left);
  let rightDistance = Math.abs(current - right);
  // Option II 
  // if (leftDistance < 0) {
  //   leftDistance = leftDistance * -1;
  // }
  // if (rightDistance < 0) {
  //   rightDistance = rightDistance * -1;
  // } 
 
  // option I
  // if (leftDistance > rightDistance) {
  //   return "The right elevator is closer";
  // } else {
  //   return "The left elevator is closer";
  // }

  // option II (ternary operator)
  return leftDistance > rightDistance
    ? "The right elevator is closer"
    : "The left elevator is closer";
}
