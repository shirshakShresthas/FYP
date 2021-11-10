import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';
import Axios from 'axios';
import Nav from './Nav.jsx';

export default  class Login extends Component{
  constructor(){
     super()
     let login=false
     let is_admin=false
     let user_name=""
     this.state={
       userName:null,
       password:null,
       user_id:'',
       login,
       is_admin,
       user_name,
       
     }  
  }
  login(){
    const url="http://localhost:5000/api/userAuth/login"
    console.warn("form data", this.state)
    Axios.post(url,{
      "user_name":this.state.userName,
      "password":this.state.password,
  })
  .then(res=>{  
    console.warn(res.data.token) 
    if(res.data.token!=null){
    localStorage.setItem("token",res.data.token) 
    this.setState({login:true})
    this.setState({is_admin:res.data.is_admin})
    this.setState({user_name:res.data.user_name})
    this.setState({user_id:res.data._id})
    }
    else{
      console.warn("wrong id pswd") 
    } 
  })
  }
  render(){
    console.log('a',this.state.login)
    if(this.state.login==true && this.state.is_admin==true){
      return <Redirect to="/admin"/>
    }
    else{
      localStorage.setItem("user_id",this.state.user_id) 
      localStorage.setItem("user_name",this.state.user_name) 
    }
    return(
      <>
      <Nav/>,
       <div className="log">
        <input type="text" onChange={(e)=>{this.setState({userName:e.target.value})}} name="username" placeholder="email or mobile number" id="uname" required/><br/><br/>
        <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} name="password" placeholder="Password" id="psd" required/><br/><br/>
        <button onClick={()=>{this.login()}} id="lgbtn">login</button><br/><br/>
      </div>
      </>
    )
  }
}