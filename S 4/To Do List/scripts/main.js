// dom nodes
let input = document.getElementById("to-do-text");
let addBtn = document.getElementById("button-addon2");
let ul = document.querySelector(".list-group");
let doneBtn = document.getElementById("done-tasks");
let allBtn = document.querySelector(".all-tasks");
let countOfAll = document.getElementById("count-of-all");
let DATAS = [];

// Functions

const handleAdd = () => {
  let obj = {
    value: input.value,
    isDone: false,
  };
  if (input.value === "") {
    Swal.fire({
      icon: "error",
      title: "Task can't be empty",
      text: "Please fill the task and press the button",
    });
  } else {
    DATAS.push(obj);
    render(DATAS);
  }
};
const addWithEnter = (event) => {
  event.code === "Enter" && handleAdd();
};
const render = (list) => {
  let template = list
    .map((data) => {
      return `
          <li class="list-group-item my-bg  text-light d-flex justify-content-between align-items-center ${
            data.isDone === true ? "done-task-style2" : ""
          }">
                <span class="text-span fs-3 ${
                  data.isDone === true ? "done-task-style1" : ""
                } " onclick="handleDone('${data.value}')">${data.value}</span>
                <button class="btn btn-outline-light my-btn" id="remove-btn" onclick="handleRemove('${
                  data.value
                }')">Remove
                    Task</button>
    </li>
        
        `;
    })
    .join("");
  ul.innerHTML = template;
  input.value = "";
  countOfAll.textContent = DATAS.length;
};
const handleDone = (value) => {
  DATAS.filter((x) => x.value === value && (x.isDone = true));
  render(DATAS);
};
const handleRemove = (value) => {
  let filteredList = DATAS.filter((x) => x.value != value);
  DATAS = filteredList;
  render(DATAS);
};
const handleDoneTasks = () => {
  let filteredList = DATAS.filter((x) => x.isDone === true);
  render(filteredList);
};
const handleAllTasks = () => {
  render(DATAS);
};

// events
addBtn.addEventListener("click", handleAdd);
doneBtn.addEventListener("click", handleDoneTasks);
allBtn.addEventListener("click", handleAllTasks);
input.addEventListener("keyup", addWithEnter);
