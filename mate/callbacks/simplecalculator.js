// Example
// const sum = (a, b) => a + b;
// calculate([2, 6], sum); // 8

// const multiply = (a, b) => a * b;
// calculate([2, 6], multiply); // 12

/**
 * @callback operationCallback
 * @param {number} operand1
 * @param {number} operand2
 */

/**
 * @param {number[]} operands
 * @param {operationCallback} operation
 *
 * @returns {number}
 */
function calculate(operands, operation) {
  return operation(...operands);
}