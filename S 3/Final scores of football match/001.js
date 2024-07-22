function calScores(list) {
  let ourPoint = 0;
  for (let point of list) {
    if (point[0] > point[2]) {
      ourPoint += 3;
    }
    if (point[0] === point[2]) {
      ourPoint++;
    }
  }
  return `our Point = ${ourPoint}`;
}
