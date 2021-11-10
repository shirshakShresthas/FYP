import React from 'react';
import { Carousel } from 'react-bootstrap';

import Image1 from '../img/3.JPG';
import Image2 from '../img/ABC.jpg';
import Image3 from '../img/3.JPG';

const CarouselContainer = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="First slide"
      style={{ height: "90vh" }}
      

    />
    <Carousel.Caption>
      <h3>Ranges of Himalayas</h3>
      <p>Mesmerizing Scenery of Himalayan Peaks, captured from top of the Myagdi</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Second slide"
      style={{ height: "90vh" }}
    />

    <Carousel.Caption>
      <h3>Dhaulagiri Base Camp</h3>
      <p>The seventh highest Himalayan Peak lying south of the Tibet and Nepal border.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
  )
}

export default CarouselContainer;