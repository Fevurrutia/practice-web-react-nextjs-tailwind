"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "./api/ServiceApi";
import Header from "./complements/Header";
import Form from "./complements/Form";
import TodosBridge from "./complements/TodosBridge";
import Gallery from "./complements/Gallery";
import ServiceApi from "./api/ServiceApi";
import ApiDisplay from "./complements/ApiDisplay";
import About from "./complements/About";

export interface PropsTodos {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

const Home = () => {
  const [todos, setTodos] = useState<PropsTodos[]>([]);
  const [dataPoke, setDataPoke] = useState<Pokemon[]>([]);

  const addTodos = (todo: PropsTodos) => {
    setTodos([...todos, todo]);
  };

  const deleteTodos = (id: number) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ServiceApi();
        if(data) {
          setDataPoke(data.results);
        } else {
          console.log('No se pudo obtener datos')
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Form addTodos={addTodos} />
      <TodosBridge todos={todos} deleteTodos={deleteTodos} />
      <Gallery />
      <ApiDisplay dataPoke={dataPoke} />
      <About />
    </>
  );
};

export default Home;
