
// meet of two arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let meet = arr1.filter((element) => arr2.includes(element));

console.log(meet);
