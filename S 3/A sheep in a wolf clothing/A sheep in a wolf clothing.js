/* A Sheep in Wolf's clothing
 */

function warnTheSheep(queue) {
  const position = queue.length - queue.indexOf("wolf");
  if (position === 1) {
    return "Pls go away and stop eating my sheep";
  } else {
return `Oi! Sheep number ${position-1}! You are about to be eaten by a wolf!`
}

}
