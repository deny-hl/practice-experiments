const searchName = 'Deny';
const personInfo = {
  age: 28,
  name: 'Deny',
  lastName: 'Bulakh',
  hobby: 'programming',
  birhdtay: '1997-06-24',
}

function search(searchName, personInfo) {
  if (searchName === personInfo.name) {
    console.log('User found:', personInfo);
  }
}