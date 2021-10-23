import TodoItem from "./components/TodoItem.js";

function App() {
  const todos = ['Wath Movie', 'Walk dogs', 'Have dinner'];
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItem text={todo}></TodoItem>
        })}
        {/* <TodoItem text={todos[0]}></TodoItem>
        <TodoItem text={todos[1]}></TodoItem>
        <TodoItem text={todos[2]}></TodoItem> */}
      </ul>
    </div>
  );
}

export default App;
