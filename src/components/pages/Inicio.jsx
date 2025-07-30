import CaruselInicio from "./componentesInicio/CaruselInicio";
import CardInicio from "./componentesInicio/CardInicio";
import { Row } from "react-bootstrap";
import { useState } from "react";

const Inicio = ({ peliculas, terminoBusqueda }) => {
  const [selector, setSelector] = useState("");

  const filtrarPeliculas = peliculas.filter((pelicula) => {
    const filtrarTitulos = pelicula.title
      .toLowerCase()
      .includes(terminoBusqueda.toLowerCase());
    const filtrarGeneros = selector === "" || pelicula.genre.includes(selector);
    return filtrarTitulos && filtrarGeneros;
  });
  // logica del select

  const handleSelectChange = (e) => {
    setSelector(e.target.value);
    // Filtrar las películas según la opción seleccionada
  };

  const peliculasSelect = peliculas.filter((pelicula) =>
    pelicula.genre.includes(selector)
  );

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
        <select
          className="form-select w-auto m-3"
          onChange={handleSelectChange}
          value={selector}
        >
          <option value="">Seleccione lo que deseas ver</option>
          <option value="Drama">Drama</option>
          <option value="Acción">Acción</option>
          <option value="Terror">Terror</option>
          <option value="Animación">Animación </option>
          <option value="Comedia">Comedia</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Histórico">Histórico</option>
          <option value="Romance">Romance</option>
          <option value="Aventura">Aventura</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
        </select>
        {/* card */}
        <Row className="row-gap-3 justify-content-center my-3">
          {filtrarPeliculas.length > 0 ? (
            filtrarPeliculas.map((pelicula) => (
              <CardInicio key={pelicula.id} pelicula={pelicula} />
            ))
          ) : (
            <>
              <h3 className="text-center mb-0">
                No se encontraron peliculas para mostrar{" "}
                <i className="bi bi-emoji-frown-fill text-success fs-5"></i>
              </h3>
              <h5 className="text-center text-danger">
                Lo sentimos <i className="bi bi-heartbreak-fill"></i>
              </h5>
            </>
          )}
        </Row>
      </article>
    </>
  );
};

export default Inicio;
