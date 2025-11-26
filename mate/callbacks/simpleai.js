// Example
// const getClientStatus = () => 'vip';
// const offerLuxuriousRoom = () => 'Luxury room';
// const offerStandardRoom = () => 'Standard room';

// offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom) === 'Luxury room'

/**
 * @param {function} getClientStatus
 * @param {function} offerStandardRoom
 * @param {function} offerLuxuriousRoom
 *
 * @returns {string}
 */

function offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom,
) {
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}
