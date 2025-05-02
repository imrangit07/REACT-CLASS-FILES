import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, compliteTodo, inCompliteTodo } from "./TodoSlice";



const App = () => {
  const [input, setInput] = useState("");
  const myTodo = useSelector((state) => state.todoApp.Todo);
  const dispatch = useDispatch();



  // ------------------------------------------------------

  const print = myTodo.map((todos, index) => {
    return (
      <>
        <li key={index}>

          {todos.complited ? <><span style={{ color: "red", textDecoration: "line-through" }}> {todos.todo}</span></> : <> {todos.todo}</>}

          <button onClick={() => { dispatch(deleteTodo(index)) }}> Delete </button>
          <button onClick={() => { dispatch(compliteTodo(todos.id)) }}> Complite </button>
          <button onClick={() => { dispatch(inCompliteTodo(todos.id)) }}> InComplite </button>
        </li>
      </>
    )
  })

  // ------------------------------------------------------------
  return (
    <>
      <h1>This is Todo App</h1>

      <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />

      <button onClick={() => {
        dispatch(addTodo({ id: Date.now(), todo: input, complited: false }))
      }}>Add</button>

      <ol style={{ padding: "10px 20px" }}>
        {print}
      </ol>
    </>
  )
}

export default App