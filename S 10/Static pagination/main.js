// dom nodes and variables
// Api
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
// NodeList of buttons
let domeNodes = document.querySelectorAll(".paginate");
// dom node
let showOf = document.querySelector("#show-counter");

// functions

const getData = () => {
  const data = JSON.parse(request.responseText);
  render(data);
};

// initial rendeer of page
const render = (list) => {
  const template = list
    .map((post) => {
      return `<div class="post">
                    <span>post id: ${post.id}</span>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>`;
    })
    .join("");

  document.getElementById("root").innerHTML = template;
};

// pagination function

const handlePagination = (datas, pageNumber, pageSize) => {
  datas = JSON.parse(request.responseText);
  pageNumber = event.target.getAttribute("alt");
  pageSize = 10;
  let currentPage = datas.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );
  // debugger;
  const showText = `
  Show ${(+pageNumber - 1) * +pageSize + 1} - ${+pageNumber * +pageSize} of ${
    datas.length
  }
  `;
  showOf.innerHTML = showText;
  render(currentPage);
};

// events
// api event
request.addEventListener("load", getData);

// buttons events

for (let domeNode of domeNodes) {
  domeNode.addEventListener("click", handlePagination);
}
