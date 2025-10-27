'use strict';

const page = document.querySelector('.page'); //access to the html page
const switcher = document.querySelector('.theme-switcher'); //acces to the target element
const themeName = document.querySelector('.theme-name');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--dark')) { //if page consins class 'page--theme--dark' tnen we are deleting it on next line and then changing text
    page.classList.remove('page--theme--dark'); //object switcher calling a method eventlistener then name of event and arrow function
    switcher.classList.remove('theme-switcher--theme--dark');
    themeName.textContent = 'Theme: Light'; //to add text
  } else {
    page.classList.add('page--theme--dark'); //if class 'page--theme--dark' doesn't exist on the page then we are adding it and changing the
    switcher.classList.add('theme-switcher--theme--dark');
    themeName.innerHTML = 'Theme: <strong>Dark</strong>';
  }
});