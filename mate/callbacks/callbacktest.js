// document.addEventListener('click', () => {
//   document.body.textContent = '123'; // Showing 123 on page when left button clecked

//   const timerId = setInterval(() => {
//     document.body.textContent = Date.now();
//   }, 1000);// showing passed time from some date till now, 1 sec refresh

//   document.addEventListener('contextmenu', () => {// contextmenu it is the right click
//     clearInterval(timerId);//it is stopping timer on right click
//   });
// });


// Filter with callbacks

// const candies0 = ['KitKat', 'Nuts', 'Lion', 'Mars', 'Snickers', 'Bounty', 'Nuts'];
// const candies2 = ['Nuts', 'Nuts', 'Nuts', 'Snickers', 'Snickers', 'Snickers', 'Mars'];

// const contains0 = candy => candy.includes('o');
// const isLessThan5 = candy => candy.length < 5;

// function filter(candies, isGoodEnough) {
//   const result = [];
  
//   for (const candy of candies) {
//     if (isGoodEnough(candy)) {
//       result.push(candy);
//     }
//   }
  
//   return result;
// }

// console.log(
//   filter(candies1, contains0)
// );

// console.log(
//   filter(candies2, isLessThan5)
// );


// Filter Factory

const candies1 = ['KitKat', 'Nuts', 'Lion', 'Mars', 'Snickers', 'Bounty', 'Nuts'];

function filter(candies, isGoodEnough) {
  const result = [];
  
  for (const candy of candies) {
    if (isGoodEnough(candy)) {
      result.push(candy);
    }
  }
  
  return result;
}

function createSizeFilter(size) {
  // size = 4
  return (candy) => candy.length <= size;
  // (candy) => candy.length <= 4
}

const isUpTo4 = createSizeFilter(4);
// (candy) => candy.length <= 4
const isUpTo6 = createSizeFilter(6);

console.log(
  filter(candies1, isUpTo4),
  filter(candies1, isUpTo6),
);
