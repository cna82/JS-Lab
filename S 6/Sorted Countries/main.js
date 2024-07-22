const countries = [
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
let span = document.querySelector("span");
let container = document.getElementById("countries");

// lowerCase items
let temp = "";
for (let contry of countries) {
  temp += ` ${contry}&nbsp; `;
  span.innerHTML = temp;
}

for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toLowerCase();
}

// sort function
countries.sort();

let firstLetter = countries[0][0];
let array = [countries[0]];

for (let i = 1; i < countries.length; i++) {
  if (countries[i][0] === firstLetter) {
    array.push(countries[i]);
  } else {
    container.innerHTML +=
      `<br><b>${firstLetter.toUpperCase()}(${array.length})</b> <br>` +
      array.join("</br>");
    firstLetter = countries[i][0];
    array = [countries[i]];
  }
}

function solution(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      string[i] = ` ${string[i]}`;
    }
  }
  console.log(string);
}

solution("camelCasingTest");
