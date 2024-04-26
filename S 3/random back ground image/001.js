/* let randomArr = [
  `url("0.jpg");`,
  `url("1.jpg");`,
  `url("2.jpg");`,
  `url("3.jpg");`,
  `url("4.jpg");`,
  `url("5.jpg");`,
  `url("6.jpg");`,
  `url("7.jpg");`,
  `url("8.jpg");`,
  `url("9.jpg");`,
];
for (let i = 0; i < randomArr.length; i++) {
  const element = randomArr[i];
  document.body.style.backgroundImage = element;
}
 */

let images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

let randomNumber = Math.floor(Math.random() * images.length);
let bgImg = `"url(${images[randomNumber]});"`;

document.body.style.backgroundImage = bgImg;
