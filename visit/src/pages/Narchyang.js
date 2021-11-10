import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';



import Image1 from '../img/4.JPG';
import Image2 from '../img/2.JPG';
import Image3 from '../img/4.JPG';
import Weather from './Weather';

function Narchyang() {



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
                            
                                <h2 className="ab">About Narchyang</h2>
                                <p className="para">The Nagi Narchyang trekking begins from Galeshwar of Parbat District and passes through Nagi, Narchyang and Tatopani before ending at Beni of Myagdi. Nagi Narchyang Trek is community based trekking trail,developed as per the Eco- friendly concept. We can reach to Galeshwor after a short drive from Beni, the headquarter of Myagdi. The famous Galeshwor temple lies there which is the main attraction of this place. We can be at Banskharka village for the first night stay. There is an excellent home stay management. There are Magar people settlement and the village is famous for orange farming. Nagi Village situated at an altitude of 2,300 m above sea level in Myagdi district. We reach to Nagi via Dandakateri of Parbat district. The village is widely known as “The Internet Village”. Mahabir Pun is the pioneer to contribute this remote village after he studied in U.S. and wireless Internet has been facilitated under his initiation

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224210.57611148478!2d83.61721250685376!3d28.59106814020023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995f8ae7204d2f1%3A0x4ea5b25238c8d553!2sNarchyang!5e0!3m2!1sen!2snp!4v1620408243537!5m2!1sen!2snp"
                    

                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    
                    
                </div>
             
     )
}

export default Narchyang;
