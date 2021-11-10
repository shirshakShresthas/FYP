import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';
import AppWeather from '../components/AppWeather';



import Image1 from '../img/beni.jpg';
import Image2 from '../img/2.JPG';
import Image3 from '../img/BeniBajar.jpg';
import Weather from './Weather';

function Beni() {



    return (
        
        <div className="Hero">
         <Navbar />
             <div className="head">
             
                 <img className="w3-image" src={Image3} alt="Hamburger Catering" />
            </div>

            

            {/* <!-- Page content --> */}
            <div className="content" >
                <div className="about">
                    <div className="w3-center">
                        <h1>Description</h1><br />
                    </div>

                    <div class="split-left">
                        <div class="centered">
                            
                                <h2 className="ab">About Beni Bazzar</h2>
                                <p className="para">Beni is the district headquarters of Myagdi district. It lies in the of 899 altitude meters above sea level. It lies in the junction of two rivers, Kali Gandaki river, and Myagdi river. It is 12km far from Baglung and around 300 km west from Kathmandu. It has become a major tourist attraction and accommodation in the Annapurna circuit. It takes 9-10 hours bus drive from Kathmandu to reach Beni. Beni Bazar is one Famous place in Beni.

Beni is the gateway to the Mustang district. Bus to mustang leaves frequently from Beni so, it is the best place to spend the day before trekking to Mustang or early drive to Jomsom. There is a marketplace where you can shop around or buy some last-minute accessories for your trip. It takes 5-6 hours’ drive to Jomsom from Beni. It takes 2-3 hours from Pokhara so, you can spend a day in Pokhara and leave late for Beni. Then you can start early morning journey from Beni to Mustang.
</p>
                        </div>
                        </div>

                        <div class="split-right">
                            <div class="centered">
                            <img src={Image1} className="w3-pic" alt="Table Setting" />
                                    
                        </div>
                            </div>
                            


                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41663.81933731624!2d83.51791360466764!3d28.354011372918766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399607c3997bd40f%3A0x23b0b6b583d28ec8!2sBeni!5e0!3m2!1sen!2snp!4v1620406637379!5m2!1sen!2snp"

                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    
                    
                </div>
             
     )
}

export default Beni;
