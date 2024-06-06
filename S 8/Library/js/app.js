// dom nodes seletion
let productList = document.getElementById("product-list");
let yourLab = document.querySelector(".your-lab");

// functions
let render = (list) => {
  let section = `
  <div class="w-10  p-2 m-4 d-flex justify-content-center  gap-4 genders">
  <button class="btn btn-outline-info " onclick="handleCategory()" id="درام" > درام </button>
  <button class="btn btn-outline-danger " onclick="handleCategory()" id="عاشقانه">عاشقانه</button>
  <button class="btn btn-outline-primary " onclick="handleCategory()" id="فلسفه">فلسفه</button>
  <button class="btn btn-outline-success " onclick="handleCategory()" id="تاریخ">تاریخ</button>
  <button class="btn btn-outline-warning " onclick="handleCategory()" id="شعر">شعر</button>
  <button onclick="handleBackToMenu()" class="btn btn-outline-dark ">   همه دسته بندی ها</button>

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

let renderYourLab = () => {
  let section = `<section class="your-lab-items d-flex flex-column gap-3">
  <div class="text-center ">
  <button onclick="handleBackToMenu()" class="btn btn-lg btn-info ">  بازگشت به صفحه اصلی</button>
  </div>
  `;
  section += YOURLAB.map((item) => {
    return `
                  <div class="product basket">
                      <img src="${item.imgSrc}" />
                      <h3>${item.title}</h3>
                      <h5 class="text-center lh-sm">  نویسنده : <span>${item.author}</span></h5>
                      <h6> ژانر :  <span>${item.genre}</span></h6>
                      <h6> سال انتشار :  <span>${item.publishedDate}</span></h6>
                      <h6><span>${item.language}</span> : زبان</h6>
                      <button onclick="handleRemove(${item.id})" class='remove btn btn-md btn-danger'>حذف از کتابخانه من  </button>
                  </div>
              `;
  }).join("");

  section += `

  </section>`;
  productList.innerHTML = section;
  yourLab.textContent = YOURLAB.length;
};

let handleSearch = (event) => {
  let value = event.target.value;
  let resultOfSearch = BOOKS.filter((item) => item.title.search(value) > -1);
  render(resultOfSearch);
};

let handleAddToYourLab = (prductId) => {
  let finded = BOOKS.find((item) => item.id === +prductId);
  YOURLAB.push(finded);
  render(BOOKS);
};
let handleRemove = (productId) => {
  let filtered = YOURLAB.filter((item) => !(item.id === +productId));
  YOURLAB = filtered;
  renderYourLab();
};
let handleBackToMenu = () => {
  render(BOOKS);
};
let handleCategory = () => {
  let genre = event.target.getAttribute("id");
  let finded = BOOKS.filter((item) => item.genre === genre);
  console.log(finded);
  render(finded);
};

// events
window.addEventListener("load", () => {
  render(BOOKS);
});





