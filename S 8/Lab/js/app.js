// dom nodes seletion
let productList = document.getElementById("product-list");
let yourLab = document.querySelector(".your-lab");
let footer = document.querySelector("footer");
let counter = 0;
// functions
const render = (list) => {
  footer.classList.remove("d-none");
  let section = `
  <div class="w-10  p-2 m-4 d-flex justify-content-center  gap-4 genders">
  <button class="btn btn-info " onclick="handleCategory()" id="درام" > درام </button>
  <button class="btn btn-danger " onclick="handleCategory()" id="عاشقانه">عاشقانه</button>
  <button class="btn btn-primary " onclick="handleCategory()" id="فلسفه">فلسفه</button>
  <button class="btn btn-success " onclick="handleCategory()" id="تاریخ">تاریخ</button>
  <button class="btn btn-warning " onclick="handleCategory()" id="شعر">شعر</button>
  <button onclick="handleBackToMenu()" class="btn btn-dark ">   همه دسته بندی ها</button>

 </div>
  
  <section class="products">`;
  section += list
    .map((item) => {
      return `
                <div class="product">
                    <img src="${item.imgSrc}" class="img-fluid" />
                    <h3>${item.title}</h3>
                    <h5 class="text-center lh-sm">  نویسنده : <span>${
                      item.author
                    }</span></h5>
                    <h6> ژانر :  <span>${item.genre}</span></h6>
                    <h6> سال انتشار :  <span>${item.publishedDate}</span></h6>
                    <h6><span>${item.language}</span> : زبان</h6>
                
                    ${
                      !YOURLAB.find((yourLabItem) => yourLabItem.id === item.id)
                        ? `<button class="btn btn-green text-light add-item" onclick="handleAddToYourLab('${item.id}')">اضافه کردن به کتابخانه من</button>`
                        : `<span class="badge bg-danger selected">!! این آیتم انتخاب شده است</span>`
                    }
                </div>`;
    })
    .join("");

  section += "</section>";
  productList.innerHTML = section;
  yourLab.textContent = YOURLAB.length;
};

function renderYourLab() {
  footer.classList.add("d-none");
  let section = `<section class="your-lab-items d-flex flex-column gap-3">
  <div class="text-center bg-danger mt-mine p-2">
  <button onclick="handleBackToMenu()" class="btn  btn-danger text-center"> بازگشت به صفحه اصلی </button>
  </div>
  `;
  section += YOURLAB.map((item) => {
    let publishersTitle = item.publishers.map((x) => x.title);
    let publishersPrice = item.publishers.map((x) => x.price);

    return `
                  <div class="product basket p-2">
                      <img src="${item.imgSrc}" />
                      <h3>${item.title}</h3>
                      <h5 class="text-center lh-sm">  نویسنده : <span>${item.author}</span></h5>
                      <h6> ژانر :  <span>${item.genre}</span></h6>
                      <div class="d-flex flex-row-reverse gap-2"> 
                      <span class="text-center">: انتشارات </span>
                      <select class="form-select form-select-sm my-select" aria-label="Default select example" onclick="handlePrice(event)"> 
                      <option value="${publishersPrice[0]}">${publishersTitle[0]} ${publishersPrice[0]} تومان</option>
                       <option value="${publishersPrice[1]}">${publishersTitle[1]} ${publishersPrice[1]} تومان</option>
                       <option value="${publishersPrice[2]}">${publishersTitle[2]} ${publishersPrice[2]} تومان</option>
                       </select>
                   </div>
                   <div>
                        <button class="btn btn-danger fw-bold  counter" onclick="handleMinus()">-</button>
                        <span id="count">0</span>
                        <button class="btn btn-success fw-bold counter" id="plus">+</button>
                    </div>
                      <button onclick="handleRemove(${item.id})" class='remove btn btn-md btn-danger'>حذف از کتابخانه من  </button>
                  </div>
              `;
  }).join("");

  section += `
  </section>`;
  let span = document.getElementById("count");
  console.log(span);
  productList.innerHTML = section;
  yourLab.textContent = YOURLAB.length;
}
const handleSearch = (event) => {
  let value = event.target.value;
  let resultOfSearch = BOOKS.filter((item) => item.title.search(value) > -1);
  render(resultOfSearch);
};

const handleAddToYourLab = (prductId) => {
  let finded = BOOKS.find((item) => item.id === +prductId);
  YOURLAB.push(finded);
  render(BOOKS);
};
const handleRemove = (productId) => {
  let filtered = YOURLAB.filter((item) => !(item.id === +productId));
  YOURLAB = filtered;
  renderYourLab();
};
const handleBackToMenu = () => {
  render(BOOKS);
};
const handleCategory = () => {
  let genre = event.target.getAttribute("id");
  let finded = BOOKS.filter((item) => item.genre === genre);
  console.log(finded);
  render(finded);
};
const handlePrice = (event, count) => {
  let price = event.target.value;
  price += price * count;
  return price;
};

// events
window.addEventListener("load", () => {
  render(BOOKS);
});
