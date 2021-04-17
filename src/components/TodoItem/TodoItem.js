import React from "react";
import "./TodoItem.css";
import { useState } from 'react';

function Todo(props) {
  const { content, id } = props;
  const [isDone, setIsDone] = useState(false); // baslangıc statesi false durumda

  const styles = {
    textDecoration: isDone ? "line-through" : "",
    textDecorationColor: isDone ? "blue" : "",
  }

  const toggleDone = () => setIsDone(!isDone);

  return <div style={styles} onClick={toggleDone} id="cross">
      {content} 
      <button onClick={() => props.handleDelete(id)} className="btn bg-danger float-right">Sil</button>
      </div>;
}

export default Todo;
