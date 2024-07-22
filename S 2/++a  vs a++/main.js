let compareFunc = () => {
  let x = 0;
  let y = x++;
  console.log(`X = ${x} , Y = ${y}`);
  let p = 0;
  let z = ++p;
  console.log(`P = ${p} , Z = ${z}`);
};

compareFunc();
