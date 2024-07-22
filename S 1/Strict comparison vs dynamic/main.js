// dom node selection
let text = document.querySelector("#text");
let input = document.getElementById("compare");
// functions
let handleComparison = () => {
  let value = input.value;
  let res = value == 5 ? "true" : "false";
  let res2 = value === 5 ? "true" : "false";
  text.textContent = `The result of == equals ${res} and the result of === equals ${res2} `;
};

// events

