import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';


import Image1 from '../img/dh.jpg';
import Image2 from '../img/2.JPG';
import Image3 from '../img/dbc.JPG';

function Dbc() {

   

    return (
        
        <div className="Hero">
        <Navbar />
            <div className="head">
                <img className="w3-image" src={Image1} alt="Hamburger Catering" />
            </div>


            {/* <!-- Page content --> */}
            <div className="content" >
                <div className="about">
                    <div className="w3-center">
                        <h1>Description</h1><br />
                    </div>

                    <div class="split-left">
                        <div class="centered">
                            
                                <h2 className="ab">About Dhaulagiri Base Camp</h2>
                                <p className="para">Dhaulagiri Circuit Trek is supposed be the 7th elevated peak in the world.  Dhaulagiri stands for escapade into the untamed region with 5,360 meter of maximum elevation. Mount Dhaulagiri is positioned at the northwest face of Pokhara. Dhaulagiri Circuit Trek has been formulated to capture Nepal’s supreme trekking region, discarding its remote wilderness. Dhaulagiri trekking is crafted to catch the fine scenario of Nepal with keeping away the profound travel of the Annapurna Sanctuary trails. In comparison to other trekking areas, trekkers have explored the faraway sides of Dhaulagiri trek and they have admired it.
                                This trek is certainly more challenging than others in the region but also more rewarding. The Dhaulagiri Base Camp Trek with Incredible Himalayan Sherpa Adventures is a perfect choice for trekkers who want to avoid any crowds and experience some raw nature. The habitation vogue makes it even a lot of authentic. Incredible Himalayan Sherpa Adventure has been organizing this trek for over 13 years and you’ll benefit from all our experience. </p>
                        </div>
                        </div>

                        <div class="split-right">
                            <div class="centered">
                            <img src={Image3} className="w3-pic" alt="Table Setting" />
                                    
                        </div>
                            </div>
                            


                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42151.540172400375!2d83.48588479180916!3d28.66445018980063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39bdfb4e64366d75%3A0x94e6ce027bcb8315!2sDhaulagiri%20I!5e0!3m2!1sen!2snp!4v1619280976041!5m2!1sen!2snp"
                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    <Tables />
                    
                </div>


    )
}

export default Dbc;
