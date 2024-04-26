/* A Sheep in Wolf's clothing
 */

function warnTheSheep(sheepArray) {
  if (sheepArray[sheepArray.length - 1] === "wolf") {
    return "Hey wolf! Please go  away and stop eating my sheep";
  } else {
    let index = sheepArray.findIndex((x) => x == "wolf");
    return `oh! sheep number ${
      sheepArray.length - index - 1
    }! you are about to be eaten by a wolf`;
  }
}
