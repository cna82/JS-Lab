function barista(coffees) {
  coffees.sort(function (a, b) {
    return a - b;
  });
  if (coffees.length > 0) {
    let total = +coffees[0];
    let result = [+coffees[0]];
    for (let i = 1; i < coffees.length; i++) {
      total = total + 2 + +coffees[i];
      result.push(total);
    }
    let sum = 0;

    for (let j = 0; j < result.length; j++) {
      sum += +result[j];
    }
    return sum;
  } else return 0;
}
