//Email masker that will take an email address and obscure it.

function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const local = email.slice(0, atIndex);
  const first = local[0];
  const last = local[local.length - 1];
  const maskedMiddle = '*'.repeat(local.length - 2);

  return first + maskedMiddle + last + email.slice(atIndex);
}

console.log(maskEmail('ndjsd@dwnud.com'))
console.log(maskEmail('bhjbdjwbei@njwkf.com'));
