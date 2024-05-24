let Blocks = document.querySelectorAll("div");
let Turn = 2;
function CheckToWin() {
  let Box = [];
  let Winner = 0;
  for (let i = 0; i < 9; i++) {
    Box[i] = Blocks[i].textContent;
  }
  for (let i = 0; i < 9; i += 3) {
    if (Box[i] == Box[i + 1] && Box[i + 1] == Box[i + 2] && Box[i + 1] != "") {
      Winner = Box[i];
    }
  }
  for (let j = 0; j < 3; j++) {
    if (Box[j] == Box[j + 3] && Box[j + 3] == Box[j + 6] && Box[j + 3] != "") {
      Winner = Box[j];
    }
  }
  if (
    ((Box[0] == Box[4] && Box[4] == Box[8]) ||
      (Box[2] == Box[4] && Box[4] == Box[6])) &&
    Box[4] != ""
  ) {
    Winner = Box[4];
  }
  if (Winner != 0) {
    setTimeout(function () {
      alert(Winner + " Win!!!");
    }, 0);
  }
}

function Click() {
  if (!this.textContent) {
    if (Turn % 2) {
      this.textContent = "O";
      Turn++;
      document.querySelector("h2").textContent = "X Turn";
    } else {
      this.textContent = "X";
      Turn++;
      document.querySelector("h2").textContent = "O Turn";
    }
  }
  CheckToWin();
}
for (let Block of Blocks) {
  Block.onclick = Click;
}
