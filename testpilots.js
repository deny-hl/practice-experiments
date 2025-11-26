// Example
// const sum = (a, b, c) =>  a + b + c;
// getResult([4, 4, 1], sum); // === 9
// getResult([10, 20, 30], sum); // === 60

// const multiply = (a, b) => a * b;
// getResult([3, 5], multiply); // === 15

// const cube = x => x ** 3;
// getResult([2], cube); // === 8

// getResult([3, 7, 5, 1, 4], Math.min); // === 1


/**
 * @param {[]} params
 * @param {function} callback
 */

function getResult(params, callback) {
  return callback(...params);
}