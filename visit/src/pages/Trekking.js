import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Weather from './Weather';
import Navbar from '../components/Navbar';


import Image1 from '../img/to.JPG';
import Image2 from '../img/2.JPG';
import Image3 from '../img/t.jpg';

function Trekking() {

   

    return (
        
        <div className="Hero">
            <div className="head">
                <img className="w3-image" src={Image3} alt="Hamburger Catering" />
            </div>




            {/* <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 col-sm-12 col-xs-12">
                        <div class="card p-4">
                            <div class="d-flex">
                                <h6 class="flex-grow-1">London</h6>
                                <h6>16:08</h6>
                            </div>
                            <div class="d-flex flex-column temp mt-5 mb-3">
                                <h1 class="mb-0 font-weight-bold" id="heading"> 13° C </h1> <span class="small grey">Stormy</span>
                            </div>
                            <div class="d-flex">
                                <div class="temp-details flex-grow-1">
                                    <p class="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" height="17px" /> <span> 40 km/h </span> </p>
                                    <p class="my-1"> <i class="fa fa-tint mr-2" aria-hidden="true"></i> <span> 84% </span> </p>
                                    <p class="my-1"> <img src="https://i.imgur.com/wGSJ8C5.png" height="17px" /> <span> 0.2h </span> </p>
                                </div>
                                <div> <img src="https://i.imgur.com/Qw7npIg.png" width="100px" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- Page content --> */}
            <div className="content" >
                <div className="about">
                    <div className="w3-center">
                        <h1>Description</h1><br />
                    </div>

                    <div class="split-left">
                        <div class="centered">
                            
                                <h2 className="ab">About TODKE</h2>
                                <p className="para">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use</p>
                        </div>
                        </div>

                        <div class="split-right">
                            <div class="centered">
                            <img src={Image1} className="w3-pic" alt="Table Setting" />
                                    
                        </div>
                            </div>
                            


                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112364.85743704473!2d83.4704708780938!3d28.346699710980268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399607c3997bd40f%3A0x23b0b6b583d28ec8!2sBeni!5e0!3m2!1sen!2snp!4v1618716465361!5m2!1sen!2snp" 
                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    <Weather />

                    
                    
                </div>
                
    )
  }
  
  export default Trekking;