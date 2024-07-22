// find city names from src of images => ./images/ali-ghapou.jpg => result= ali-ghapou

// dom nodes selection and variables
let images = document.querySelectorAll("section img");
let span = document.getElementById("city-names");
let emp = "";
// functions
function handleSource() {
  for (let img of images) {
    let src = img.getAttribute("src");
    let res = `<div> ${src
      .replace("./images/", "")
      .replace(".jpg", "")} </div>`;
    emp += res;
  }
  span.innerHTML = emp;
}

// events

addEventListener("load", handleSource);
