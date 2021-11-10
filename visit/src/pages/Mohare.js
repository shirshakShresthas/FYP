import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';
import Mtable from '../pages/Mtable';



import Image1 from '../img/dh.jpg';
import Image3 from '../img/mohore1.PNG';
import Image2 from '../img/poonhill2.jpg';

function Khopra() {
    return (
        
        <div className="Hero">
        <Navbar />
            <div className="head">
                <img className="w3-image" src={Image2} alt="Hamburger Catering" />
            </div>


            {/* <!-- Page content --> */}
            <div className="content" >
                <div className="about">
                    <div className="w3-center">
                        <h1>Description</h1><br />
                    </div>

                    <div class="split-left">
                        <div class="centered">
                            
                                <h2 className="ab">Mohare Dada</h2>
                                <p className="para">The Mohare Dada trek embraces the Annapurna region which is one of the amazing ecotourism innovative treks that lies in the western part of Nepal, offers fantastic views of the Himalayas range Annapurna, Dhaulagiri, Nilgiri, Machhapuchhare (Fishtail), and many other neighboured spectacular snowy capped mountains. The Mohare Danda Trek is a relatively moderate trek that conserved that belongs to the Annapurna region of Nepal. This trek is a newly opened route for the visitors which holds a majestic beauty of nature and culture. However, trekking to Mohare Danda is a great opportunity to explore and experience the legendary rural part of Nepal, meeting friendly and hospitable local people, and a wide range of spectacular flora and fauna with awe-inspiring towering views of the majestic mountains peaks.</p>
                        </div>
                        </div>

                        <div class="split-right">
                            <div class="centered">
                            <img src={Image3} className="w3-pic" alt="Table Setting" />
                            
                                    
                        </div>
                            </div>
                            


                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.9210843948279!2d83.68961766675429!3d28.39911498599803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995fb901538e619%3A0x8c8090bd893ea23a!2sPoon%20Hill!5e0!3m2!1sen!2snp!4v1619336455542!5m2!1sen!2snp"
                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    <Mtable />
                    
                </div>


    )
}

export default Khopra;
