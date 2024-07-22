// DOM NODES
let divs = document.querySelectorAll("div");
let gO = document.getElementById("game-over");
let coloredBoxes = [];

// functions
let rdmColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

let changeColor = (event) => {
  let div = event.target;
  div.style.backgroundColor = `${rdmColor()}`;
  div.classList.add("disabled");
  coloredBoxes.push(div);
  gameOver();
};
let gameOver = () => {
  if (coloredBoxes.length === 16) {
    gO.textContent = "Congratulations , game over !!";
    gO.classList.remove("not-finished");
    gO.classList.add("finished");
  }
};
let handleRefresh = () => {
  window.location.reload();
};

// events
for (let div of divs) {
  div.addEventListener("click", changeColor);
}
