/*  BMI calculator */

function BMICalc(weight, height) {
  let bmiResult = weight / Math.pow(height, 2);
  return bmiResult;
}
/*  BMI STATUS  */
function BMIStat(input) {
  if (input >= 5 && input < 18.5) {
    return "Unfortunately you are under weight !";
  }
  if (input >= 18.5 && input < 25) {
    return "Luckiy  your weight is normal !";
  }
  if (input >= 25) {
    return "Unfortunately you are over weight !";
  } 
}

const weight = prompt("Enter your weight in kg");
const height = prompt("Enter your height in (m) like 1.70");
let bmiResult = BMICalc(weight, height);
let bmiStatus = BMIStat(bmiResult);
alert("Your BMI is equal to" + " " + bmiResult + " " + bmiStatus);
