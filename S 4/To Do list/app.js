// dom nodes and variables
let input = document.getElementById("to-do-list-text");
let ul = document.querySelector("ul");
let btn = document.getElementById("button-addon2");

// functions

function handleAdd() {
  if (input.value === "") {
    alert("You must wite s.th !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    let removeIcon = document.createElement("button");
    removeIcon.textContent = "Remove";
    removeIcon.classList.add("remove-btn");
    li.appendChild(removeIcon);
  }
  input.value = "";
}
function addWithEnter(event) {
  if (event.code === "Enter") {
    handleAdd();
  }
}
// events

ul.addEventListener(
  "click",
  (evt) => {
    if (evt.target.tagName === "LI") {
      evt.target.classList.toggle("checked");
    } else if (evt.target.tagName === "BUTTON") {
      evt.target.parentElement.remove();
    }
  },
  false
);
