let lunches = [];

function addLunchToEnd(lunches, str) {
  let newArr = lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
}
console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));


function addLunchToStart(lunches, str) {
  let newArr = lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
}
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

function removeLastLunch(lunches) {
  let newArr = lunches.pop();
  console.log(`${newArr} removed from the end of the lunch menu.`);
  if(lunches.length === 0) {
    console.log("No lunches to remove.")
  }
  return lunches;
}


function removeFirstLunch(lunches) {
  let newArr = lunches.shift();
  console.log(`${newArr} removed from the start of the lunch menu.`);
  if(lunches.length === 0) {
    console.log("No lunches to remove.")
  }
  return lunches;
}


function getRandomLunch(lunches) {
  let randomNum = Math.floor(Math.random() * lunches.length);
  let randomElement = lunches[randomNum];
  console.log(`Randomly selected lunch: ${randomElement}`);
  if(lunches.length === 0) {
    console.log("No lunches available.")
  }
}


function showLunchMenu(lunches) {
  let [lunch1, lunch2, ...rest] = lunches;
  if(lunches.length !== 0) {
    console.log(`Menu items: ${lunch1, lunch2, rest}`)
  } else if(lunches.length === 0) {
    console.log("The menu is empty.")
  }
}