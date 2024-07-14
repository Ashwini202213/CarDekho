
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarCarousel = () => {
  return (
    <div className='container pt-5 h-540'>
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://stimg.cardekho.com/images/uploadimages/1718276438397/Desktop_1686x548px-CD.jpg"
        alt="Tata Nexon EV"
      />
  
      <Carousel.Caption>
        <h3>Tata Nexon EV</h3>
        <p>Secures maximum safety rating</p>
      </Carousel.Caption>
      
    </Carousel.Item>
  
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://stimg.cardekho.com/images/uploadimages/1718280457572/CD-MasterHead-Desktop_1686x548px.jpg"
        alt="Tata Altroz Racer"
      />
      <Carousel.Caption>
        <h3>Tata Altroz Racer</h3>
        <p>Revealed with top features</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
  );
};

export default CarCarousel;



