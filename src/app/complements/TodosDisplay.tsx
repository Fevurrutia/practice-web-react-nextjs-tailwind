import React from "react";

interface PropsTodosDisplay {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

interface PropsTodo {
  todo: PropsTodosDisplay;
  deleteTodos: (id: number) => void;
}

const TodosDisplay = ({ todo, deleteTodos }: PropsTodo) => {
  return (
    <div className="max-w-lg mx-auto rounded-md bg-gray-200 shadow-lg shadow-gray-400 mt-10">
      <div className="flex flex-col p-5">
        <div className="flex gap-1">
          <p className="text-slate-500 font-bold">Name: </p>
          <span className="text-slate-500">{todo.name}</span>
        </div>
        <div className="flex gap-1">
          <p className="text-slate-500 font-bold">Lastname: </p>
          <span className="text-slate-500">{todo.lastname}</span>
        </div>
        <div className="flex gap-1">
          <p className="text-slate-500 font-bold">Email: </p>
          <span className="text-slate-500">{todo.email}</span>
        </div>
        <button
          onClick={() => deleteTodos(todo.id)}
          className="flex justify-center items-center w-1/6 rounded-md py-1 mt-2 bg-red-400 text-white font-semibold shadow-md shadow-gray-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodosDisplay;
