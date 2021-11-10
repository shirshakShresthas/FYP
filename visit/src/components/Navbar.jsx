import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image7 from "../img/logocopy.png";

const Navbar = () => {

  const [show, setShow] = useState(false);
  const [showR, setShowR] = useState(false);
  const [hide_l, setHide] = useState("sirshak");
  const [newUser, setNewUser] = useState(
    {
      name: '',
      password: '',
    }
  );
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }


  const handleSubmit = () => {
    console.log("hello")
    const url = "http://localhost:2000/api/userAuth/login"
    Axios.post(url, {
      "user_name": newUser.name,
      "password": newUser.password,
    })
      .then(res => {
        console.warn(res.data.token)
        if (res.data.token != null) {
          localStorage.setItem("token", res.data.token)
        }
        else {
          console.warn("wrong id pswd")
        }
      })
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">  <img src={Image7} style={{ height: "2em", width:"4.6em" }} alt="..." /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Travel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Destination</a>
              </li>

            </ul>

            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "15em" }}/>

            <div id="right">

              
              <button onClick={() => setShow(true)} className="btn btn-primary" style={{ float: "left", backgroundColor: "mediumseagreen" }}><Link to="/Login">Signin</Link> </button>

            </div>
            



          </div>
          </div>
      </nav>
      </>
    

  );

};

export default Navbar;