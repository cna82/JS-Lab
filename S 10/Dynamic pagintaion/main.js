// dom nodes and apis
// api all posts
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();

// api users
const requestUsers = new XMLHttpRequest();
requestUsers.open("GET", "https://jsonplaceholder.typicode.com/users");
requestUsers.send();

// dom node
const root = document.querySelector("#root");
const selectSize = document.querySelector("#select-size");
const btn = document.querySelector("#btn");
const divSelect = document.getElementById("selects");
const options = document.querySelectorAll(".option");
const showOf = document.getElementById("show-counter");
const selectAuthour = document.querySelector("#select-authous");
// functions

const getData = () => {
  const data = JSON.parse(request.responseText);
  render(data);
};

const getDataUsers = () => {
  const data = JSON.parse(requestUsers.responseText);
  renderUsers(data);
};

const render = (list) => {
  let template = list
    .map((item) => {
      return `
  <div class="post">
        <span>post id : ${item.id} </span>
        <h2>${item.title}</h2>
        <p>${item.body}</p>
  </div>
  `;
    })
    .join("");
  root.innerHTML = template;
};
const renderUsers = (list) => {
  let template = list
    .map((user) => {
      return `
  <option value="${user.id}">${user.name}</option>
  `;
    })
    .join("");
  selectAuthour.innerHTML = template;
};
const renderSelect = () => {
  switch (+selectSize.value) {
    case 5: {
      let template = ``;
      for (let i = 1; i <= 20; i++) {
        let temp = `
        <option value="${i}">${i}</option>
      `;
        template += temp;
        btn.innerHTML = template;
      }
      break;
    }
    case 10: {
      let template = ``;
      for (let i = 1; i <= 10; i++) {
        let temp = `
            <option value="${i}">${i}</option>
          `;
        template += temp;
        btn.innerHTML = template;
      }
      break;
    }
    case 20: {
      let template = ``;
      for (let i = 1; i <= 5; i++) {
        let temp = `
        <option value="${i}">${i}</option>
      `;
        template += temp;
        btn.innerHTML = template;
      }
      break;
    }
  }
};
const handlePagination = (datas, pageNumber, pageSize) => {
  datas = JSON.parse(request.responseText);
  pageNumber = +btn.value;
  pageSize = +selectSize.value;
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
const handleChange = (event) => {
  const datas = JSON.parse(request.responseText);
  const value = +event.target.value;
  let filteredList = datas.filter((data) => +data.userId === value);
  debugger;
  render(filteredList);
};
const handleSearch = (event) => {
  const datas = JSON.parse(request.responseText);
  const search = event.target.value;
  let searchedPosts = datas.filter((data) => data.title.search(search) > -1);
  render(searchedPosts);
};
// events
// api all posts event
request.addEventListener("load", getData);
// api users event
requestUsers.addEventListener("load", getDataUsers);
selectSize.addEventListener("change", renderSelect);



