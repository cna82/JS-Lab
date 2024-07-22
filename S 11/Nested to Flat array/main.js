let nestedArr = ["hi", 212, [true, "sana", [100, 50], "harchi"]];
// depend on the depth level the number in flat(number) will be changed !!!
let flatArr = nestedArr.flat(2);
console.log(flatArr);
