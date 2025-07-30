import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-black p-3">
      <Container>
        <Row className="text-center text-md-start align-items-start">
          <Col
            md={4}
            className="mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start"
          >
            <h1 className="footer-brand">Xtream</h1>
            <p className="text-muted small m-0 footer-copy">
              &copy; {new Date().getFullYear()} Xtream. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/contacto"} className="text-reset footer-link">Contacto</Link>
              </li>
              <li>
                <Link to={"/acercadenosotros"} className="text-reset footer-link">Acerca de nosotros</Link>
              </li>
              <li>
                <Link to={"/*"} className="text-reset footer-link">Subscripciones</Link>
              </li>
              <li>
                <Link to={"/*"} className="text-reset footer-link">Contenido Premium</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="https://facebook.com/Xtream" target="_blank" rel="noopener noreferrer" className="text-reset me-3 footer-icon-link">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com/Xtream" target="_blank" rel="noopener noreferrer" className="text-reset me-3 footer-icon-link">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com/Xtream" target="_blank" rel="noopener noreferrer" className="text-reset me-3 footer-icon-link">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
