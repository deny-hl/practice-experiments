// Реалізуй метод indexOf, який повторює функціонал оригінального методу. Всередині методу використовуй this для доступу до поточного масиву.

// Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби.

// Приклад:

// const numbers = [5, 6, 1, 4, 2, 5];
// numbers.indexOf(5) === 0
// numbers.indexOf(7) === -1
// numbers.indexOf(1, 3) === -1
// numbers.indexOf(5, -2) === 5

numbers.indexOf = function(searchElement, fromIndex) {
  let start = this.length + fromIndex;

  if (fromIndex === undefined) {
    start = 0;
  } else if (fromIndex >= 0) {
    start = fromIndex;
  } else {
    start = this.length + fromIndex;

    if (start < 0) {
      start = 0;
    };
  }

  for (let i = start; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  };

  return -1;
};