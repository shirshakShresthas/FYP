import React , { useState, Component } from 'react';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Button, Modal,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlaceProp.css';

export default class HotelProp extends Component{
  constructor(props) {
    super(props);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.state = {
      showA:false,
      mesg:'',
      show:false,
      StartDate:'',
      EndDate:'',
      Room:'',
      PaymentType:'cash',
      amount:7000 
    };
}
handlea(b){
  this.setState({showa:true}, 
  this.setState({mesg:b})  
    )
}


handleClosea (){
  this.setState({showa:false})
}

onChangeStartDate(e) {
  this.state.StartDate=e.target.value
}
onChangeEndDate(e) {
  this.state.EndDate=e.target.value
}
onChangeRoom(e) {
  this.state.Room=e.target.value
}
paymentTC(e) {
  this.state.PyamentType="cash"
}
paymentTO(e) {
  this.state.PyamentType="online"
}

handleModal(){
  this.setState({show:true},   
    )
}
handleClose (){
  this.setState({show:false})
}

onSubmit(e) {

  console.log(localStorage.getItem("user_id"))
  axios.post('http://localhost:2000/api/storeb', {
    "hotel_id":this.props._id,
    "user_id":localStorage.getItem("user_id"),
    "start_date":this.state.StartDate,
    "end_date":this.state.EndDate,
    "no_of_room":this.state.Room,
    "paymentType":this.state.PaymentType,
    "amount":this.state.Room*this.props.price_per_room                
})
  .then(res => {
     console.log(res);
  })
  .catch(err => {
     console.log(err);
  });
  this.handlea("Successfully Booked")
}
render(props){
  return (
    <div className="cd">
    <Card  style={{margin:"20px"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="hotel image"
          height="200"   
          image={this.props.imgsrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.Location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.available_room}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.price_per_room}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <button onClick={()=>this.handleModal()} className="btn btn-primary">Book</button>   
            <Modal show={this.state.show} onHide={()=>this.handleClose()} >
                <Modal.Header closeButton>
                    <Modal.Title>Book Accomodation</Modal.Title>
                </Modal.Header>
<Modal.Body>
<Form.Group >
<Form.Label>Star date: </Form.Label>
<Form.Control type="Date" placeholder="MM/DD/YYYY" onChange={this.onChangeStartDate}/> 
<Form.Label>End Date: </Form.Label>
<Form.Control type="Date" placeholder="MM/DD/YYYY" onChange={this.onChangeEndDate} /> 
<Form.Label>No of room: </Form.Label>
<Form.Control type="text" placeholder="No of Room" onChange={this.onChangeRoom} /> <br/> <br/>
<Button variant="primary" onClick={()=>this.paymentTC()}>By cash </Button>
<Button variant="info"  style={{float:"right"}} onClick={()=>this.paymentTO()} >By Online </Button>
</Form.Group>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={()=>this.handleClose()} > Close</Button>
                    <Button variant="primary" onClick={()=>this.onSubmit()}> Book </Button>
</Modal.Footer>
</Modal> 
<Modal show={this.state.showa} onHide={()=>this.handleClosea()} >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Form.Group >
                <Form.Label>{this.state.mesg}</Form.Label>    
            </Form.Group>
        </Modal.Body>
    </Modal>    
      </CardActions>
    </Card>
    </div>
  );
}
}