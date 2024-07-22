// dom nodes and variables

let right = document.getElementById("right");
let left = document.getElementById("left");
let up = document.getElementById("up");
let down = document.getElementById("down");
let icons = document.querySelectorAll(".icon");

// functions

function clear() {
  for (let icon of icons) {
    icon.classList.remove("active");
  }
}

// events

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      clear();
      right.classList.add("active");
      break;
    case "ArrowLeft":
      clear();
      left.classList.add("active");
      break;
    case "ArrowUp":
      clear();
      up.classList.add("active");
      break;
    case "ArrowDown":
      clear();
      down.classList.add("active");
      break;
  }
});
