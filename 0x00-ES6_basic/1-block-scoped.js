export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true; // Declare a new variable with let inside the block
    let task2 = false; // Declare a new variable with let inside the block
  }

  return [task, task2];
}
