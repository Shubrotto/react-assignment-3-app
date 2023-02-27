import React from "react";

const Todo = (props) => {
  const { title, desc, id } = props.todo;
  return (
    <article className="todo">
      <h3 className="todo__title ">{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

export default Todo;
