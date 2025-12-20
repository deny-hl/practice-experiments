// Array forEach method implementation
const words = ['one', 'two', 'three', 'four', 'five', 'six'];

// words.runForEach = function(callback) {
//   console.log(this);
  
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// const result = words.runForEach((item, index, items) => {
//   console.log(item, index, items);
// });

// console.log(result);

// Iteration explanation:
// 1. The forEach method is called on the words array.
// 2. Inside the forEach method, a loop iterates over each element of the array.
// 3. For each element, the provided callback function is invoked with three arguments:
//    - item: the current element being processed in the array.
//    - index: the index of the current element.
//    - items: the entire array being traversed.
// 4. The callback function logs the item, index, and items to the console.
// 5. The forEach method does not return a value, so result will be undefined.


// to find lengths of each word plus its index
// const result = words.map((word, index, items) => word.length + index);

// The map method is called on the words array. 
// const result =words.filter((word, index, items) => word.length > 3);


// The findIndex method is called on the words array.
// const result = words.findIndex((word, index, items) => {
//   console.log(word);
  
//   return word.length > 3;
// })

// console.log(result);

const result = words.some((word, index, items) => {
  console.log(word);

  return word.length > 3;
});

console.log(result);