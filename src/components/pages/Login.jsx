import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="container">
      <Row xs={1} md={2} className="align-items-center">
        <Col className="mb-3">
        <h1 className="my-5 text-center text-md-start tinos">Inicia sesión</h1>
          <Form className="raleway" onSubmit={handleSubmit((e)=>e.preventDefault)}>
            <Form.Group>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juan2025@mail.com"
                maxLength={100}
                min={5}
                {...register("email", {
                  required: "El correo electrónico es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo electrónico debe tener un formato válido, por ejemplo juan2025@mail.com",
                  },
                  minLength: {
                value: 5,
                message:
                  "La descrición amplia debe tener almenos 5 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "La descrición amplia debe tener como máximo 100 caracteres",
              },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                maxLength={16}
                min={8}
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Recordar mi usuario y contraseña"
              ></Form.Check>
            </Form.Group>
            <Button variant="success" type="submit" className="mt-4">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
        <Col>
        <img src="https://ca-times.brightspotcdn.com/dims4/default/f507332/2147483647/strip/true/crop/3000x2000+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F08%2Fa2%2Fe47e812707a40774a24e6e8f6657%2F95ecd52380214c35b1cca6dbc1d8a643" alt="Últimos estrenos de 2025" className="img-fluid rounded"/></Col>
      </Row>
    </section>
  );
};

export default Login;
