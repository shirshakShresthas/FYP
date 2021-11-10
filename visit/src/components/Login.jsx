import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import Axios from 'axios';
import { Button, Modal,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default  class Login extends Component{
  constructor(){
     super()
     let login=false
     
     let user_name=""
     this.state={
      showA:false,
      meseg:'',
       userName:null,
       password:null,
       user_id:'',
       login,
       
       user_name
       
     }  
  }

  handlea(m){
    this.setState({showa:true}) 
    this.setState({meseg:m})
  }
  
  handleClosea (){
    this.setState({showa:false})
  }

  login(){
    if(this.state.userName==null || this.state.password==null){
      let a ="Please Fill up the form properly and completely"
      this.handlea(a)
    }
    else{
    const url="http://localhost:2000/api/signin"
    console.warn("form data", this.state)
    Axios.post(url,{
      "email":this.state.userName,
      "password":this.state.password,
  })
  .then(res=>{  
    
    console.warn(res.data.token) 
    if(res.data.token!=null){
    console.warn("shirshak")
    localStorage.setItem("token",res.data.token) 
    localStorage.setItem("user_id",res.data._id)
    this.setState({login:true})
    this.setState({user_name:res.data.username})
    this.setState({user_id:res.data._id})
    this.handlea("You are logged IN")
        localStorage.setItem("user_name",this.state.firstName) 
        localStorage.setItem("showLogin",false)
        localStorage.setItem("showLogout",true)
    }
    else{
      this.handlea("Wrong id pswd")
    } 
  })}
  }
  render(){
 
    if (this.state.login == true) {
      return <Redirect to="/" />
    }
        
        
      
    
    
     
    return(
      <>
       <div className="log">
        
        <input type="text" onChange={(e)=>{this.setState({userName:e.target.value})}} name="username" placeholder="email or mobile number" id="uname" required/><br/><br/>
        <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} name="password" placeholder="Password" id="psd" required/><br/><br/>
        <Modal show={this.state.showa} onHide={()=>this.handleClosea()} >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body >
                    <Form.Group style={{padding:"20px"}}>
                        <Form.Label style={{color:"blue"}}>{this.state.meseg}</Form.Label>    
                    </Form.Group>
                </Modal.Body>
            </Modal>
        <button onClick={()=>{this.login()}} id="lgbtn">Signin</button><br/><br/>
        <p style={{float:"right"}}>Don't have an account?<Link to="/Signup" style={{margin:"80px"}}>Signup</Link></p>
      </div>,
      
      </>
    )
  }
}