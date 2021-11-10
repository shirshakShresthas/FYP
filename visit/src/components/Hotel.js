import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HotelProp from './HotelProp';
import axios from 'axios';
export default class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {business: []};
  }
  componentDidMount(){
    axios.get('http://localhost:2000/api/showhotel')
      .then(res => {
        this.setState({ business: res.data.response });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
render(props){
  const mystyle = {
    color: "black",
    textAlign: 'center',
    fontFamily: "Arial"
  };
  return(
      <>
        
        <h1 style={mystyle} >Accomodation</h1>
        {this.state.business.map(function ncard(val){
          return(           
            <HotelProp
                imgsrc={"http://localhost:2000/"+ val.avatar}
                Name={val.name}
                Location={val.location}
                price_per_room={val.price_per_room}
                Description={val.description}
                />
          );
        })}
      </>
  )
}
}