// let srt = 'Denys';

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverse(srt));

// let arr = [1, 2, 3, 4, 5];

// function sumArr(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }
// console.log(sumArr(arr));

// function sum(arr) {
//   return [...new Set(arr)];
// }
// console.log(sum([1, 2, 2, 3, 4, 4, 5]));

// function isPalindrome(str) {
//   let s = str.toLowerCase();
//   return s === s.split('').reverse().join('');
// }
// console.log(isPalindrome('Racecar'));

// let max = Math.max(...arr);
// console.log(max);

// arr.filter(n => n > 10);


// let name = 'Denys';

// function reverse(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverse('bulakh'));

// let a = 5;
// let b = 5;
// let c = a + b;
// console.log(c);

// function square(num) {
//   return num * 3;
// }
// console.log(3);

// function isEven(n) {
//   return n ? true : false;
// }

// function sumTo(n) {
//   for(let i = 0; i >= n; i++) {
//     n = n++;
//   }
//   return n;
// }

/**

 @typedef {object} Robot

 @property {string} name

 @property {number} wheels

 @property {number} version

 @property {function} info

*/

function makeRobot(name, wheels, version) {
  // Creating an object which returns
  return {
    name: name,
    wheels: wheels,
    version: version,
    coords: {
      x: 0,
      y: 0,
    },
// Getting & returning info about robot
    get info() {
      return (
        `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`
      );
    },
// Getting & returning name of the robot & location coordinates
    get location() {
      return (
        `${this.name}: x=${this.coords.x}, `
        + `y=${this.coords.y}`
      );
    },
//Methods of movement which calling by chain
    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }

      return this;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }

      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }

      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      }

      return this;
    },
// Transfering robot to the specific location
    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return this;
    },
  };
}
