let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let arr3 = [...arr1, ...arr2].sort((a, b) => a - b);
arr3.reduce((x,y)=>x-y)