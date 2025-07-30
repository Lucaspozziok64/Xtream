import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const FormularioPelicula = ({ titulo, crearPeliculas, buscarPelicula, editarPelicula }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const {id} = useParams()
  const navegacion = useNavigate()

  useEffect(()=>{
    if(titulo==="Editar película/serie"){
      const peliculaBuscada = buscarPelicula(id);
      setValue("title", peliculaBuscada.title);
      setValue("year", peliculaBuscada.year);
      setValue("director", peliculaBuscada.director);
      setValue("genre", peliculaBuscada.genre);
      setValue("type", peliculaBuscada.type);
      setValue("image", peliculaBuscada.image);
      setValue("trailer", peliculaBuscada.trailer);
      setValue("description_breve", peliculaBuscada.description_breve);
      setValue("description_amplia", peliculaBuscada.description_amplia);
    }
  },[])

  const onSubmit = (pelicula) => {
    if (titulo === "Añadir película/serie") {
      if (crearPeliculas(pelicula)) {
        Swal.fire({
          title: "Pelicula/serie creada",
          text: `La pelicula/serie ${pelicula.title} fue creada correctamente.`,
          icon: "success",
        });
        reset();
      }
    } else{
      if (editarPelicula(id, pelicula)) {
        Swal.fire({
          title: "Pelicula/serie editada",
          text: `La pelicula/serie ${pelicula.title} fue editada correctamente.`,
          icon: "success",
        });
      }
      navegacion('/administrador')
    }
  };

  return (
    <section className="container my-5">
      <h1 className="my-3">{titulo}</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Matrix"
            {...register("title", {
              required: "El título es un dato obligatorio",
              minLength: {
                value: 1,
                message: "El título debe tener al menos 1 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El título debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.title?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Director*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lana y Lilly Wachowski"
            {...register("director", {
              required: "El director es un dato obligatorio",
              minLength: {
                value: 1,
                message: "El director debe tener al menos 1 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El director debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.director?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Año de estreno*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 1999"
            {...register("year", {
              required: "El año de estreno es un dato obligatorio",
              min: {
                value: 1800,
                message: "El año de estreno debe estar entre 1800 y 2025",
              },
              max: {
                value: 2025,
                message: "El año de estreno debe estar entre 1800 y 2025",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.year?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Poster*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.jpg"
            {...register("image", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value: /^https?:\/\/.+\.(jpg|jpeg|png|gif)(\?.*)?$/,
                message:
                  "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.image?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo*</Form.Label>
          <Form.Select
            {...register("type", {
              required: "Es obligatorio indicar el tipo",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Pelicula">Pelicula</option>
            <option value="Serie">Serie</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.type?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Género*</Form.Label>
          <Form.Select
            {...register("genre", {
              required: "El género es un dato obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Acción">Acción</option>
            <option value="Animación">Animación</option>
            <option value="Aventura">Aventura</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Crimen">Crimen</option>
            <option value="Drama">Drama</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Histórico">Histórico</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.genre?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Película de acción y fantasía sobre la realidad simulada."
            as="textarea"
            {...register("description_breve", {
              required: "La descripcion breve es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "La descripcion breve debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 150,
                message:
                  "La descripcion breve debe tener como maximo 150 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.description_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Un hacker descubre que su realidad es una simulación creada por máquinas inteligentes y se une a la rebelión para liberar a la humanidad."
            as="textarea"
            {...register("description_amplia", {
              required: "La descripcion amplia es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "La descripcion amplia debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 300,
                message:
                  "La descripcion amplia debe tener como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.description_amplia?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Trailer*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.youtube.com/watch?v=OM0tSTEQCQA"
            {...register("trailer", {
              required: "La url del trailer es un dato obligatorio",
              pattern: {
                value:
                  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
                message:
                  "El trailer debe ser una url de un video de YouTube valido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.trailer?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 d-flex gap-3">
          <Button variant="success" type="submit">
            Guardar
          </Button>
          <Link className="btn btn-danger" to={"/administrador"}>
            Cancelar
          </Link>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioPelicula;
