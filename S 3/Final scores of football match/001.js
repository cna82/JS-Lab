function calScores(arrPoints) {
  let points = 0;
  for (const point of arrPoints) {
    if (point[0] > point[2]) {
      points += 3;
    }
    if (point[0] === point[2]) {
      points++;
    }
  }
  return points;
}
