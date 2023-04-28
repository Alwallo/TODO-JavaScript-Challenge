const inputTarea = document.getElementById('inputForm');
const btnAgregar = document.getElementById('btnCreate');

btnAgregar.addEventListener('click', (event) => {
  event.preventDefault();
  const inputTexto = inputTarea.value;

  const tareas = document.getElementById('cardsList');
  const newLista = document.createElement('li');
  newLista.classList.add('card');

  newLista.innerHTML = `
    <div>
      <i class="fa icon fa-square"></i>
      <span class="task">${inputTexto}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;

  tareas.appendChild(newLista);
  inputTarea.value = '';
  removeLista();
  addCheckEvent(newLista.firstElementChild.firstElementChild);
});

const removeLista = () => {
  const trashIcons = document.querySelectorAll('.trashIcon');
  trashIcons.forEach(trash => {
    trash.addEventListener('click', () => {
      trash.parentNode.remove();
    });
  });
}
removeLista();

const addCheckEvent = (check) => {
  console.log("dentro");
  check.addEventListener('click', () => {
    const iconClass = check.classList;
    const spanClass = check.nextElementSibling.classList;
    if(iconClass.contains('fa-check-square')){
      iconClass.remove('fa-check-square');
      spanClass.remove('completedTask');
      iconClass.add('fa-square');
    }
    else{
      iconClass.remove('fa-square');
      iconClass.add('fa-check-square');
      spanClass.add('completedTask');
    }
  });
};

const checksOnLoad = document.querySelectorAll('.fa');
checksOnLoad.forEach(check => {
  addCheckEvent(check);
});