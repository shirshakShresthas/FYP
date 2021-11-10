import React from "react";
import Navbar from "./components/Navbar";
import CarouselContainer from "./components/CarouselContainer";
import Explore from "./components/Explore";
import Player from "./components/Player";
import Hotel from "./components/Hotel";
import Events from "./components/Events";
import Trek from "./components/Trek";
import { Redirect, Link } from 'react-router-dom';
import "./Home.css";



const Home = () => {
  return (
    <>
      <Navbar />
      <CarouselContainer />,
      <Player />,
      <Explore />,
      <Trek/>,
      <div className="lm">
      <div className="lmk">
      <Link to="/khopra" size="small" color="primary">View More</Link> </div>
      <div className="lmk1">
      <Link to="/dhaulagiribasecamp" size="small" color="primary">View More</Link> </div>
      <div className="lmk2">
      <Link to="/mohare" size="small" color="primary">View More</Link>
      </div>
      </div>
      
      
      <Events />,
      <Hotel />,
      
      
      
    </>

  );
};

export default Home;

