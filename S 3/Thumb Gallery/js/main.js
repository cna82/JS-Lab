// dom nodes selection
let images = document.querySelectorAll("#root img");
let banner = document.getElementById("biggest");
let carName = document.querySelector("span");

// functions
function hanldeImg(event) {
  let image = event.target;
  banner.src = image.src;
  carName.textContent = image.alt;
  clearClass();
  image.classList.add("active");
}
function clearClass() {
  for (let img of images) {
    img.removeAttribute("class");
  }
}
// events
for (let img of images) {
  img.addEventListener("click", hanldeImg);
}
