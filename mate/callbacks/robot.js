/**
 * @param {function} checkVersion
 * @param {number} currentVersion
 *
 * @returns {number}
 */

// Iterative Binary search
function getFirstBadVersion(checkVersion, currentVersion) {
  let left = 1;
  let right = currentVersion;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (checkVersion(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

