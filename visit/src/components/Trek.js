import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrekProp from './TrekProp';
import axios from 'axios';
export default class Trek extends Component {
  constructor(props) {
    super(props);
    this.state = {business: []};

    
  }
  componentDidMount(){
    axios.get('http://localhost:2000/api/showt')
      .then(res => {
        this.setState({ business: res.data.response });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
render(props){
  const mystyle = {
    fontsize: "2.8em",
    textAlign: 'center',
    fontFamily: "Arial"
  };
  return(
      <>
        
        <h1 style={mystyle} >Trekking Routes</h1>
        {this.state.business.map(function ncard(val){
         
          return(           
            <TrekProp
              
                imgsrc={"http://localhost:2000/"+ val.avatar}
                name={val.name}
                location={val.location}
                available_room={val.available_room}
                
                />
          );
        })}
      </>
  )
}
}