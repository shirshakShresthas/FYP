import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CarouselContainer from './components/CarouselContainer';
import Destination from './Destination';
import Navbar from './components/Navbar.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import Player from './components/Player';
import Explore from './components/Explore';
import Events from './components/Events';
import Trekking from './pages/Trekking';
import Destinations from './pages/Destinations';
import Home from './Home';
import Dbc from './pages/Dbc';
import Khopra from './pages/Khopra';
import Mohare from './pages/Mohare';
import Beni from './pages/Beni';
import Narchyang from './pages/Narchyang';
import Malika from './pages/Malika';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';




const App = ( )  => {
    return (
        <>

        
            
            
                <Switch>

   
                <Route  exact path="/" component={Home} />
                <Route   path="/Login" component={Login} />
                <Route   path="/Signup" component={Signup} />

                    
                    <Route  path="/destinations" component={ Destinations } />
                    <Route  path="/beni" component={ Beni } />
                    <Route  path="/narchyang" component={ Narchyang } />
                    <Route  path="/malika" component={ Malika } />

                    <Route  path="/trekking" component={ Trekking } />
                    <Route  path="/dhaulagiribasecamp" component={ Dbc } />
                    <Route  path="/khopra" component={ Khopra } />
                    <Route  path="/mohare" component={ Mohare } />

                    
                </Switch>
            
            
            
            
            
            
        </>
    );
};

export default App;
