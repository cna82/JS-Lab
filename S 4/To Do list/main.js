function toDoList() {
  const h3 = document.createElement("h3");
  let input = document.getElementById("list");
  h3.textContent = input.value;
  document.querySelector("div").appendChild(h3)
}
