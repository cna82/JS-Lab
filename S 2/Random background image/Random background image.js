// random bg image

let harchi = document.getElementById("place");

let randomNumber = makeRandomNumber(0, 9);

function makeRandomNumber(x, y) {
  let distance = y - x + 1;
  let rdmNum = Math.floor(Math.random() * distance + x);
  return rdmNum;
}

document.body.style.backgroundImage = `url(${randomNumber}.jpg)`;

switch (randomNumber) {
  case 0:
    harchi.textContent = "تخت جمشید";
    break;
  case 1:
    harchi.textContent = "کاخ سفید";
    break;
  case 2:
    harchi.textContent = "کاخ گلستان";
    break;
  case 3:
    harchi.textContent = "کاخ سعد آباد";
    break;
  case 4:
    harchi.textContent = "کاخ عالی قاپو";
    break;
  case 5:
    harchi.textContent = "مسجد نصیر";
    break;
  case 6:
    harchi.textContent = "برج آزادی";
    break;
  case 7:
    harchi.textContent = "عالی قاپو";
    break;
  case 8:
    harchi.textContent = "مسجد وکیل";
    break;
  case 9:
    harchi.textContent = "غار کلیسا";
    break;
}
