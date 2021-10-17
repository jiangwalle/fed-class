// Bind onclick event to add button
const addBtn = document.querySelector('#todo-add-btn');
const addTodoInput = document.querySelector('#todo-add-input');
const errorMsg = document.querySelector('.error-msg');
const todosDiv = document.querySelector('#todos');

function startup() {
  // Get todos from localstorage
  const todos = JSON.parse(localStorage.getItem('todos'));

  todos.forEach(todo => {
    const li = createTodo(todo.text, todo.isCompleted);
    todosDiv.append(li);
  });
}

function saveToLocalStorage() {
  const data = [];
  const todos = document.querySelectorAll('#todos li');
  for (let todoLi of todos) {
    const todoText = todoLi.children[0].innerText;
    const isCompleted = todoLi.classList.contains('completed');
    data.push({ text: todoText, isCompleted: isCompleted });
  }
  console.log(data);
  localStorage.setItem('todos', JSON.stringify(data));
}

addBtn.addEventListener('click', function() {
  // Add todo
  const todoText = addTodoInput.value;
  
  if (todoText) {
    const li = createTodo(todoText);
    todosDiv.append(li);

    // Save
    saveToLocalStorage();

    // Clear
    clear();
  } else {
    // Display error message
    errorMsg.innerText = `TODO的内容不能为空！`;
  }
});

todosDiv.addEventListener('click', function(event) {
  console.dir(event.target);
  const {tagName, textContent} = event.target;
  if (tagName === 'BUTTON') {
    if (textContent === '删除') {
      event.target.parentElement.parentElement.remove();
    } else if (textContent === '完成' || textContent === '撤销') {
      const li = event.target.parentElement.parentElement;
      li.classList.toggle('completed');

      const status = event.target.innerText;
      event.target.innerText = status === '撤销' ? '完成' : '撤销';
    } else if (textContent === '修改') {
      const newTodo = prompt('修改TODO内容');
      event.target.parentElement.parentElement.children[0].innerText = newTodo;
    }

    saveToLocalStorage();
  }
});

function clear() {
  errorMsg.innerText = '';
  addTodoInput.value = '';
}

function createTodo(todoText, isCompleted) {
  const li = document.createElement('li');
  let statusBtnLable = '完成';
  
  if (isCompleted) {
    li.classList.add('completed');
    statusBtnLable = '撤销';
  }

  li.innerHTML = `
    <span>${todoText}</span>
    <div class="btn-group">
      <button>删除</button>
      <button>${statusBtnLable}</button>
      <button>修改</button>
    </div>`;
  return li;
}

startup();