import Carousel from 'react-bootstrap/Carousel';
import '../../../index.css';
const CaruselInicio = () => {

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='w-100 img-fluid'
            style={{ maxHeight: '400px', objectFit: 'cover' }}
            src="https://disneyplusbrasil.com.br/wp-content/uploads/2020/11/perfil-comum-1024x487.jpg"
            alt="perfil de usuarios con animaciones "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='w-100 img-fluid'
            style={{ maxHeight: '400px', objectFit: 'cover' }}
            src="https://telaviva.com.br/wp-content/uploads/2022/05/streaming.jpg"
            alt="dinujos animados de peliculas y cine para compartir en familia"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CaruselInicio;
