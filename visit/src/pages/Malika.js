import React from 'react';
import './Destination.css';
import Tables from './Tables';
import Navbar from '../components/Navbar';



import Image1 from '../img/malika.JPG';
import Image2 from '../img/2.JPG';
import Image3 from '../img/dhuri.PNG';
import Weather from './Weather';

function Malika() {



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
                            
                                <h2 className="ab">About Malika Dhuri</h2>
                                <p className="para">Malika Dhuri is a mountain peak in Myagdi District, Nepal. The name is derived from two words Malika and Dhuri. It is the beautiful place of Myagdi District. Its most of the region lies in muna-village of myagdi district, Nepal. It touches the border line of Baglung District. Its height is about 3.500 m above sea level. It touches the border line of Dhorpatan hunting reserve. Almost all the villages around the Myagdi River and few parts of Baglung District can be seen from this place. It is the peak place of Muna village and also of the Myagdi District. It is taller than other mountains in Myagdi District as well as in Baglung District. As it lies on the border of Myagdi and Baglung, it may also be known by the name of" joint view point of myagdi and baglung”.

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77967.48332605642!2d83.39598426296573!3d28.44143259502298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996037037070271%3A0x8b1d2d368de17cfb!2sMalika%20mandir!5e0!3m2!1sen!2snp!4v1620408532579!5m2!1sen!2snp"

                    style={{ height: "40vh", width: "100%" }}
                    ></iframe>

                    
                    
                </div>
             
     )
}

export default Malika;
