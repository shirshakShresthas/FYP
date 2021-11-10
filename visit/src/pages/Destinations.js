import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';



import Image1 from '../img/to.JPG';
import Image2 from '../img/2.JPG';
import Image3 from '../img/t.jpg';
import Weather from './Weather';

function Destinations() {



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
                            
                                <h2 className="ab">About TODKE</h2>
                                <p className="para">Todke, located at the confluence of Beni Municipality and Mangala Rural Municipality, in Myagdi district, is famous for sightseeing and sunrise. And of late, it has been attracting a large number of tourists, thanks to the development of infrastructure there.
Todke is becoming an attractive destination for domestic tourists, along with Raghuganga Rural Municipality. After the operation of a community lodge at Todke, which was constructed with the investment of the locals, the number of tourists -- both domestic and foreign -- visiting the place has gone up.
According to the locals, the number of tourist arrivals has significantly increased this year as compared to the previous years, and that was after opening of the Todke Hill Resort Pvt. Ltd., a modern and well-equipped community lodge in Todke.
Tara Prasad Acharya, chairman of the Hotel Entrepreneurs' Association Myagdi, said that the number of tourists was increasing in Todke, which lies at an altitude of 2,500 metres above sea level.
Tourists from Myagdi, Baglung, Parbat, Pokhara, Kathmandu, as well as from foreign countries like Japan, China, France, among others, visit Todke.
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45687.33151540646!2d83.5140420510585!3d28.411667499560885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399605d9b9d22e21%3A0x8edc1934eb0dea31!2sTodke%20Hills!5e0!3m2!1sen!2snp!4v1619342049123!5m2!1sen!2snp"
                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    
                    
                </div>
             
     )
}

export default Destinations;
