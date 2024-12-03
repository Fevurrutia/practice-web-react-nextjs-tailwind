import React from "react";
import TodosDisplay from "./TodosDisplay";

interface PropsTodosBridge {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

interface PropsTodos {
  todos: PropsTodosBridge[];
  deleteTodos: (id: number) => void;
}

const TodosBridge = ({ todos, deleteTodos }: PropsTodos) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodosDisplay key={index} todo={todo} deleteTodos={deleteTodos} />
      ))}
    </>
  );
};

export default TodosBridge;
