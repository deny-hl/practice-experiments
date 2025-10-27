//Email masker that will take an email address and obscure it.

// function maskEmail(email) {
//   const atIndex = email.indexOf('@');
//   const local = email.slice(0, atIndex);
//   const first = local[0];
//   const last = local[local.length - 1];
//   const maskedMiddle = '*'.repeat(local.length - 2);

//   return first + maskedMiddle + last + email.slice(atIndex);
// }

// console.log(maskEmail('ndjsd@dwnud.com'))
// console.log(maskEmail('bhjbdjwbei@njwkf.com'));


'use strict';

/**
 * @param {string} romanNum
 *
 * @returns {number}
 */
// Email masker that will take an email address and obscure it (commented out).

'use strict';

// Simple romanToInt implementation (kept for context)
/**
 * @param {string} romanNum
 *
 * @returns {number}
 */
function romanToInt(romanNum) {
  if (!romanNum) {
    return 0;
  }

  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNum.length; i++) {
    const current = values[romanNum[i]];
    const next = values[romanNum[i + 1]];

    if (next > current) {
      result += next - current;
      i++; // Skip the next character since we've already used it
    } else {
      result += current;
    }
  }

  return result;
}


/**
 * @param {number} area
 *
 * @returns {number[]}
 */
function constructRectangle(area) {
  // Basic, readable implementation without throwing errors.
  // If input is invalid (non-positive or non-integer), return [0, 0].
  if (!Number.isInteger(area) || area <= 0) {
    return [0, 0];
  }

  const root = Math.floor(Math.sqrt(area));
  for (let w = root; w >= 1; w--) {
    if (area % w === 0) {
      const l = area / w;
      return [l, w];
    }
  }

  // Fallback (shouldn't be reached for positive integers)
  return [area, 1];
}

// Export for test runners (support both default and named import styles)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = constructRectangle;
  module.exports.constructRectangle = constructRectangle;
}

// --- quick tests ---
if (typeof require !== 'undefined' && require.main === module) {
  console.log('constructRectangle(1) ->', constructRectangle(1));
  console.log('constructRectangle(3) ->', constructRectangle(3));
  console.log('constructRectangle(4) ->', constructRectangle(4));
  console.log('constructRectangle(6) ->', constructRectangle(6));
  console.log('constructRectangle(18) ->', constructRectangle(18));
  console.log('constructRectangle(24) ->', constructRectangle(24));
  console.log('constructRectangle(31) ->', constructRectangle(31));
  console.log('constructRectangle(225) ->', constructRectangle(225));
  console.log('constructRectangle(4826) ->', constructRectangle(4826));
}