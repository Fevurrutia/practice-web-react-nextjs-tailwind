import { useState } from "react";
import { PropsTodos } from "../page";

interface PropsForm {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

interface PropsFormArray {
  addTodos: (todo: PropsTodos) => void;
}

const Form = ({ addTodos }: PropsFormArray) => {
  const [form, setForm] = useState<Omit<PropsForm, "id">>({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTodos({
      id: Date.now(),
      ...form,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto rounded-md bg-gray-200 shadow-lg shadow-gray-400 mt-10"
    >
      <div className="flex flex-col gap-3 p-10">
        <p className="uppercase text-2xl text-slate-500 font-bold tracking-wider">
          form
        </p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="rounded-md p-1 shadow-md shadow-gray-400 outline-none"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter lastname"
          className="rounded-md p-1 shadow-md shadow-gray-400 outline-none"
          value={form.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="rounded-md p-1 shadow-md shadow-gray-400 outline-none"
          value={form.email}
          onChange={handleChange}
        />
        <button className="bg-white py-1 w-1/5 mt-2 font-semibold mx-auto rounded-md text-gray-500 shadow-md shadow-gray-400">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
