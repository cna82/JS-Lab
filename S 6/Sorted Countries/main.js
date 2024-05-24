const COUNTRIES = [
  "iran",
  "australia",
  "brazil",
  "USA",
  "germany",
  "finland",
  "china",
  "norway",
  "England",
  "italy",
  "georgia",
  "UAE",
  "argentina",
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// dom nodes selection
let ul = document.getElementById("countries");

let sortedList = COUNTRIES.map((country) => country.toLowerCase()).sort();
console.log(sortedList);

// functions

function render(list) {
  for (let item of list) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }
}

render(sortedList);
