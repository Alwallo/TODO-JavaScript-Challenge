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
      <i class="fa fa-check-square icon"></i>
      <span class="task">${inputTexto}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;

  tareas.appendChild(newLista);
  inputTarea.value = '';
  removeLista();
});

const removeLista = () => {
  const trashIcons = document.querySelectorAll('.trashIcon');
  trashIcons.forEach(icono => {
    icono.addEventListener('click', () => {
      icono.parentNode.remove();
    });
  });
}
removeLista();