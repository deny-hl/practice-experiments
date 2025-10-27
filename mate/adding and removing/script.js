const app = document.querySelector('.todo-app');
const list = app.querySelector('.todo-app__list');
const form = app.querySelector('.todo-app__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // const item = document.createElement('li');
  // item.textContent = form.elements.todo.value; //used to find elemets value and than used to show it in list

  // item.addEventListener('dblclick', () => {
  //   item.remove(); //to delete element on dobble click
  // });
  //list.prepend(item) used to add element to the top and append add element to the and

  list.insertAdjacentHTML('beforeend', `
    <li>
      ${form.elements.todo.value}
      <button onclick="thus.parentElement.remove()">x</button>
    </li>
  `); 

  form.reset();
});
