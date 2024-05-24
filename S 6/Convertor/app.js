function convert() {
  const range = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const res=document.getElementById("result")
  let result;

  if (from === to) {
    result = range;
  }
  if (from === "meter" && to === "centimeter") {
    result = range * 100;
  }
  if (from === "meter" && to === "millimeter") {
    result = range * 1000;
  }
  if (from === "meter" && to === "kilometer") {
    result = range / 1000;
  }
  if (from === "centimeter" && to === "meter") {
    result = range / 100;
  }
  if (from === "centimeter" && to === "millimeter") {
    result = range * 10;
  }
  if (from === "centimeter" && to === "kilometer") {
    result = range / 100000;
  }
  if (from === "millimeter" && to === "meter") {
    result = range / 1000;
  }
  if (from === "millimeter" && to === "centimeter") {
    result = range / 10;
  }
  if (from === "millimeter" && to === "kilometer") {
    result = range / 1000000;
  }
  if (from === "kilometer" && to === "meter") {
    result = range * 1000;
  }
  if (from === "kilometer" && to === "centimeter") {
    result = range * 100000;
  }
  if (from === "kilometer" && to === "millimeter") {
    result = range * 1000000;
  }

 res.textContent = ` The result is ${result} ${to}`;
}
