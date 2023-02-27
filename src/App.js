import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const todosData = [
  {
    id: uuidv4(),
    title: "read react documentation",
    desc: "react documentation might be boring but I can do it",
  },
  {
    id: uuidv4(),
    title: "do react assignment",
    desc: "react assignments might be boring but I can do it",
  },
];

function App() {
  const [todos, setTodos] = useState(todosData);

  const handleAddTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  };
  return (
    <div className="container">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
