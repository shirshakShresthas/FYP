import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';
import Ktables from '../pages/Ktables';



import Image1 from '../img/dh.jpg';
import Image2 from '../img/khopra.PNG';
import Image3 from '../img/khop.jpg';
import Weather from './Weather';
import AppWeather from '../components/AppWeather';

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
                            
                                <h2 className="ab">Khopra Trek</h2>
                                <p className="para">Khopra Danda (Ridge) Trek is one of the newly opened treks in the Annapurna region which features stunning views of snowcapped mountains and an exposure to various ethnicities of the region. This lesser-known trek is ideal for families and families with children as the trails are made properly and are easy to walk on. Khopra Danda Trek offers the perfect view of snow-capped peaks and green hills including terraced fields, pasturelands, and beautiful cultural villages. The 12-days trip begins with your arrival at Tribhuvan International Airport. You then take a scenic flight from Kathmandu to Pokhara with mesmerizing views of massive mountains followed by the short scenic drive to Kimche. Kimche starts the actual trekking through off the beaten trails to Ghandruk, which is the largest Gurung village in the Annapurna region.</p>
                        </div>
                        </div>

                        <div class="split-right">
                            <div class="centered">
                            <img src={Image3} className="w3-pic" alt="Table Setting" />
                            
                                    
                        </div>
                            </div>
                            


                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.5439452831924!2d83.70839141389904!3d28.472307732976684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995f91ad8e7827b%3A0xdd5d1350ec6af1d3!2sKhopra%2C%20Shikha%2033200!5e0!3m2!1sen!2snp!4v1620403565938!5m2!1sen!2snp" 
                    
                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    <Ktables />
                    
                    
                </div>


    )
}

export default Khopra;
