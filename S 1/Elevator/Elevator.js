/* Distance Of Elevator
 */
function distanceOfElevator(left, right, current) {
  let leftDistance = Math.abs(current - left);
  let rightDistance = Math.abs(current - right);
  /* 
  Or use condition to absolute 
  
  if (leftDistance < 0) {
    leftDistance = leftDistance * -1;
  }
  if (rightDistance < 0) {
    rightDistance = rightDistance * -1;
  } 
  */

  if (leftDistance > rightDistance) {
    return "The right elevator is closer";
  } else {
    return "The left elevator is closer";
  }
}
