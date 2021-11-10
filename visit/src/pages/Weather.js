import ReactWeather, { useOpenWeather } from 'react-open-weather';


import Image1 from './icons/02n.png';
import Image2 from './icons/01d.png';
import Image3 from '../img/t.jpg';

 const Weather = () => {
   return (
    
     <div className="container">
         <div className="app-title">
             <p>Weather</p>
         </div>
         <div className="notification"> </div>
         <div className="weather-container">
             <div className="weather-icon">
                 <img src={Image2} alt="" style={{ weight: "100%" }}/>
             </div>
             <div className="temperature-value">
                 <p>- 22.13°<span>C</span></p>
             </div>
             <div className="temperature-description">
                 <p> -Clear Sky </p>
             </div>
             <div className="location">
                 <p>-Myagdi</p>
             </div>
         </div>
     </div>
    
   );
 };
  export default Weather;

// const Weather = props => {
//     return (
//         <>
            {/* <div className="container">
                <div className="cards">
                    <h1>{props.city},{props.country}</h1>
                    <h5 className="py-4">
                        <i className="wi wi-day-sunny display-1"></i>
                    </h5>
                    <h1 className="py-2">{props.celsisus}&deg;</h1>
                    {minMaxTemp(props.temp_min, props.temp_max)}
                    <h4 className="py-3">{props.description}</h4>
                </div>
            </div>, */}

//             <div className="container">
//         <div className="app-title">
//             <p>Weather</p>
//         </div>
//         <div className="notification"> </div>
//         <div className="weather-container">
//             <div className="weather-icon">
//                 <img src={Image2} alt="" style={{ weight: "100%" }}/>
//             </div>
//             <div className="temperature-value">
//                 <h1 className="py-2">{props.celsisus}&deg;</h1>
//             </div>
//             <div className="temperature-description">
//             <h4 className="py-3">{props.description}</h4>
//             </div>
//             <div className="location">
//             <h1>{props.city},{props.country}</h1>
//             </div>
//         </div>
//     </div>
//         </>
//     );
// }
// function minMaxTemp(min, max) {
//     return (<h3>
//         <span className="px-4">{min}&deg;</span>
//         <span className="px-4">{max}&deg;</span>
//     </h3>);

// }
// export default Weather;