// arguments in ES5

function testArguments(x) {
  // let arg = arguments;
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    console.log(element);
  }
}
