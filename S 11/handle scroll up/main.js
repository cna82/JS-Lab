// dom  nodes
let header = document.querySelector(".site-header");
let start = 0;
// functions
function scrollHide() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  console.log(st);
  if (st > start) {
    header.classList.add("d-none");
  } else {
    header.classList.remove("d-none");
  }
  start = st <= 0 ? 0 : st;
}
// events
window.onscroll = function () {
  scrollHide();
};
