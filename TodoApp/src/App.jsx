import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  compliteTodo,
  inCompliteTodo,
  updateTodo,
} from "./TodoSlice";
import "./style.css";

const App = () => {
  const [input, setInput] = useState("");
  const [btnToggle, setBtnToggle] = useState(true);
  const [todoId, setTodoId] = useState("");

  const inputRef = useRef(null);

  const myTodo = useSelector((state) => state.todoApp.Todo);
  const dispatch = useDispatch();

  const editBtn = (id, todo) => {
    setTodoId(id);
    setInput(todo);
    setBtnToggle(false);
    inputRef.current.focus();
  };

  const print = myTodo.map((todos, index) => {
    return (
      <li
        key={index}
        className={`todo-item ${todos.completed ? "todo-item-complete" : "todo-item-incomplete"}`}
      >
        <span className={`todo-text ${todos.completed ? "todo-text-complete" : "todo-text-incomplete"}`}>
          {todos.todo}
        </span>

        <button
          onClick={() => dispatch(deleteTodo(index))}
          className="todo-action-button todo-delete-button"
        >
          Delete
        </button>
        <button
          onClick={() => dispatch(compliteTodo(todos.id))}
          className="todo-action-button todo-complete-button"
        >
          Complite
        </button>
        <button
          onClick={() => dispatch(inCompliteTodo(todos.id))}
          className="todo-action-button todo-incomplete-button"
        >
          InComplite
        </button>
        <button
          onClick={() => editBtn(todos.id, todos.todo)}
          className="todo-action-button todo-edit-button"
        >
          Edit
        </button>
      </li>
    );
  });

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
        placeholder="Enter a task..."
        className="todo-input"
      />

      {btnToggle
        ?
        (
          <button
            onClick={() => {
              dispatch(addTodo({ id: Date.now(), todo: input, completed: false }));
              setInput("");
            }}
            className="todo-button todo-add-button"
          >
            Add
          </button>
        )
        :
        (
          <button
            onClick={() => {
              dispatch(updateTodo({ id: todoId, newTodo: input }));
              setBtnToggle(true);
              setInput("");
            }}
            className="todo-button todo-update-button"
          >
            Update
          </button>
        )}

      <ol className="todo-list">{print}</ol>
    </div>
  );
};

export default App;
