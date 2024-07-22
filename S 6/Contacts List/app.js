document.getElementById("addContact").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    addContact(name, phone);
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
  } else {
    alert("please enter both fields!");
  }
});

document.getElementById("search").oninput = (event) => handleSearchInput(event);

function handleSearchInput() {
  const list = document.getElementById("search").value.toLowerCase();
  filtered(list);
}

function addContact(name, phone) {
  const contactList = document.getElementById("contactList");
  const contactItem = document.createElement("li");
  contactItem.textContent = `${name} - ${phone}`;
  contactItem.setAttribute("data-name", name.toLowerCase());
  contactItem.classList.add("badge");
  contactItem.classList.add("bg-light");

  contactList.appendChild(contactItem);
}

function filtered(list) {
  const contacts = document.querySelectorAll("#contactList li");
  for (const contact of contacts) {
    const name = contact.getAttribute("data-name");
    if (name.includes(list)) {
      contact.style.display = "";
    } else {
      contact.style.display = "none";
    }
  }
}
