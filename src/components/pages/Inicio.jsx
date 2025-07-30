import CaruselInicio from "./componentesInicio/CaruselInicio";
import CardInicio from "./componentesInicio/CardInicio";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const Inicio = ({ peliculas }) => {
  // logica del select
  const [selector, setSelector] = useState('');

  const handleSelectChange = (e) => {
    setSelector(e.target.value);
    // Filtrar las películas según la opción seleccionada
    const filteredPeliculas = peliculas.filter(pelicula => {
      return pelicula.genero === e.target.value;
    });
  };

  const filteredPeliculas = selector ? peliculas.filter(pelicula => pelicula.genero === selector) : peliculas;
  
  // Si no hay selección, mostrar todas las películas

  return (
    <>
      {/* carusel*/}
      <CaruselInicio className="container" />
      <article className="container">
        {/* titulo principal */}
        <h1 className="text-center mb-3 mt-3 tinos"> Bienvenidos a Xtream </h1>
        <p className="raleway text-center mb-5">
          ¡Comienza tu maratón de entretenimiento ahora!
        </p>

        {/* select */}
        <select className="form-select w-auto m-3" onChange={handleSelectChange}>
          <option value={selector}>Seleccione lo que deseas ver</option>
          <option value="opcion1">Drama </option>
          <option value="opcion2">Accion </option>
          <option value="opcion3">Terror </option>
          <option value="opcion4">Animacion </option>
          <option value="opcion5">Comedia</option>
          <option value="opcion5">series</option>
          <option value="opcion6">Ver en familia</option>
        </select>
        {/* card */}
          <Row className="row-gap-3 justify-content-center my-3">
            {peliculas.map((pelicula)=>(
                <CardInicio key={pelicula.id} pelicula={pelicula}/>
            ))}
          </Row>
      </article>
    </>
  );
};

export default Inicio;
