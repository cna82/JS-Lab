// substract arr1-arr2

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let substract = arr1.filter((element) => !arr2.includes(element));

console.log(substract);

// substract arr2-arr1

let substract2 = arr2.filter((element) => !arr1.includes(element));
console.log(substract2);
