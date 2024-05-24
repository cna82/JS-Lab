let up = document.querySelector(".up");
let down = document.querySelector(".down");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

function arrow(event) {
  if (event.keyCode === 38) {
    up.classList.add("shine");
  }
  if (event.keyCode === 40) {
    down.classList.add("shine");
  }
  if (event.keyCode === 39) {
    right.classList.add("shine");
  }
  if (event.keyCode === 37) {
    left.classList.add("shine");
  }
}

window.addEventListener("keyup", arrow);
