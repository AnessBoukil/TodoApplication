/* eslint-disable react/prop-types */
import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.Myinput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter todo item"
        />
        <button className={styles.Mybutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
