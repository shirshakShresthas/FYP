import React from 'react';
import { Carousel } from 'react-bootstrap';

import './event.css';

import Image1 from '../img/cult.jpg';
import Image2 from '../img/dham.jpg';
import Image3 from '../img/holi.PNG';

const Events = () => {
  return (
    <div className="section" style={{ height: "auto", backgroundColor:"ivory", width:"70%", marginLeft:"250px"}}>
    <div className="head">
      <h1 style={{ textAlign:"center" }}>Events And Cultures</h1>
    </div>
    <div className="home" style={{ height: "auto", marginLeft:"200px"}}>
      <Carousel style={{ height: "69vh", width:"80%", marginTop:"40px"  }}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>Festival of Color, Holi</h3>
      <p>The festival celebrates the eternal and divine love of Radha and Krishna.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="Second slide"
      
      
    />

    <Carousel.Caption>
      <h3>Lakhe Nach</h3>
      <p>The Lakhe tradition is found in Newar settlements throughout Nepal.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3>Galeshowor Dham</h3>
      <p>Galeshwor, described in religious scriptures as a holy place for the time immemorial.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    </div>
  )
}

export default Events;