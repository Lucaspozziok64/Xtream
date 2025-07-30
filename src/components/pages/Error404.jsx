import { Container, Row, Col } from "react-bootstrap";
import errorImage from "../../assets/img-error-404.png";
import "../../index.css"; 
import "./Error404.css";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <section className="container-fluid bg-light text-dark">
        <Container className="text-center py-5">
          <Row>
            <Col>
              <img
                src={errorImage}
                alt="Página no encontrada"
                className="img-fluid error-image mb-4"
              />
              <h2>Oops! Página no encontrada</h2>
              <p>La URL a la que intentaste acceder no existe.</p>
              <Link to="/" className="btn btn-outline-primary">
                Volver al inicio
              </Link>
            </Col>
          </Row>
        </Container>
       </section>
  );
};

export default Error404;
