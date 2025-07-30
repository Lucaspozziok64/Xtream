import Card from 'react-bootstrap/Card';
import {  Col , } from 'react-bootstrap';
import { Link } from 'react-router';


const CardInicio = ({ pelicula }) => {

    return (<>
               <Col
                        xs={12}       
                        sm={6}        
                        md={4}        
                        lg={3}
                    >
                        <Card className='h-100 sombraCard'>
                            <Card.Header className='bg-success'>
                            <Card.Text>{pelicula.type}</Card.Text>
                            </Card.Header>
                            <Card.Img
                                variant="top"
                                src={pelicula.image}
                                alt="Póster de Matrix"
                                className='h-100 overflow-hidden'
                            />
                            <Card.Body className='h-100'>
                                
                                <Card.Title className='mb-3'>{pelicula.title}</Card.Title>
                                <div className='d-flex flex-column'>
                                    <Card.Text>Año: {pelicula.year}</Card.Text>
                                    <Card.Text>Género: {pelicula.genre}</Card.Text>
                                </div>
                                <hr/>
                                <Card.Text>{pelicula.description_breve}</Card.Text>
                                
                            </Card.Body>
                            <Card.Footer>
                                <Link className='btn btn-success' to={`/detalle/${pelicula.id}`}> Ver más </Link></Card.Footer>
                        </Card>
                    </Col>
    </>
    );
};

export default CardInicio;