import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const { todos } = props;
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
