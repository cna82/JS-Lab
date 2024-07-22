// option I
function multiply(arr) {
  let result = 1;
  for (let item of arr) {
    result *= item;
  }
  return result;
}
//  option II
let mult = (list) => {
  return list.reduce((x, y) => x * y);
};

// without Array
function mul() {
  let res = 1;
  for (let option of arguments) {
    res *= option;
  }
  return res;
}

// arguments just work in simple functions and it doesn't work in arrow functions ()=>{
//   return arguments
// result= aruments is not defiend
// }
