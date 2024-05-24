import { useState } from "react";
const body = document.querySelector("body");
console.log(body);

export function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoInput = event.target.elements.todo;
    const newTodo = todoInput.value;

    if (newTodo.trim()) {
      setTodoList([...todoList, newTodo]);
      todoInput.value = "";
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleEditTodo = (index) => {
    const newTodoList = [...todoList];
    const inputElement = document.querySelector("input");  
    newTodoList[index] = inputElement.value;
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="todo-list">
        <h1>Todo List</h1>
        <form onSubmit={handleAddTodo}>
          <input type="text" name="todo" />
          <button className="add-btn">Add Todo</button>
          <button onClick={() => setTodoList([])} className="clear-btn">
            Clear All
          </button>
        </form>
        <div className="todos-parent">
          <p className="todos-count">Todo List: {todoList.length}</p>
          <ol>
            {todoList.map((todo, index) => (
              <div className={`todo todo-${index}`} key={index}>
                <li key={index}>{todo}</li>
                <div className="buttons">
                  <button onClick={() => handleRemoveTodo(index)}>
                    Remove
                  </button>
                  <button onClick={() => handleEditTodo(index)}>Edit</button>
                </div>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
