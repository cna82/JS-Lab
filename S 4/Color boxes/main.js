let children = document.querySelectorAll(".child");
let count = 0;

function randomBg() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
}

function changeBackground() {
  let background = (event.target.style.backgroundColor = randomBg());
  return background;
}

for (const child of children) {
  child.onclick = changeBackground;
}
