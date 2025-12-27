// Реалізуй метод slice, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

// Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби.

// Приклад:

// const numbers = [5, 6, 1, 4, 2, 5];
// const result1 = numbers.slice(0);
// const result2 = numbers.slice(3);
// const result3 = numbers.slice(-2);
// const result4 = numbers.slice(0, -2);
// const result5 = numbers.slice(2, -4);
// numbers === [5, 6, 1, 4, 2, 5]
// result1 === [5, 6, 1, 4, 2, 5]
// result2 === [4, 2, 5]
// result3 === [2, 5]
// result4 === [5, 6, 1, 4]
// result5 === []

numbers.slice = function(start = 0, end = this.length) {
  const len = this.length;
  const begin = start < 0 ? Math.max(0, len + start) : Math.min(start, len);
  let finish = end < 0 ? Math.max(0, len + end) : Math.min(end, len);

  if (finish < begin) {
    finish = begin;
  }

  const result = [];

  for (let i = begin; i < finish; i++) {
    result[result.length] = this[i];
  }

  return result;
};