// dom nodes
let box = document.getElementById("box");
// functions

function rdmColorMaker() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

function boxColor() {
  box.style.backgroundColor = rdmColorMaker();
}
function stopInterval(event) {
  if (event.key === "Enter") {
    clearInterval(myTimer);
  }
}

// events

let myTimer = setInterval(boxColor, 500);
addEventListener("keyup", stopInterval);
