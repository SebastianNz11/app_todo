import { AgregarTarea } from "./components/AgregarTarea";
import { TareasNoHechas } from "./components/TareasNoHechas";
import { useState, useEffect } from "react";

export const App = () => {
  const [listaTareas, setListaTareas] = useState([]);

  const agregarTarea = (tarea) => {
    let tarea2 = tarea.toLowerCase();
    if (tarea2.trim() !== "" && !listaTareas.find((t) => t.nombre === tarea2)) {
      setListaTareas([...listaTareas, { nombre: tarea2, hecho: false }]);
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("listaTareas");
    if (data) {
      setListaTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  return (
    <>
      <AgregarTarea lista={agregarTarea} />
      <TareasNoHechas
        listaTareas={listaTareas}
        setListaTareas={setListaTareas}
      />
    </>
  );
};
