import React, {useState} from 'react';
import Axios from 'axios';
import './sign.css';
import Nav from './Nav.jsx';
import Alert from 'react-bootstrap/Alert';
function Signup(){
    const url="http://localhost:5000/api/user/store"
    const [data, setData]= useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        pswd:"",
        cpswd:"",
        show:false
    })
    function submit(e){
        e.preventDefault();
        if(data.pswd!=data.cpswd){
            setData({show:true});
        }
        else{
            Axios.post(url,{
                "first_name":data.fname,
                "last_name":data.lname,
                "email":data.email,
                "phone":data.phone,
                "password":data.pswd,                     
            })
            .then(res=>{
                console.log(res.data)
            })
        }
    }
    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
        console.log(e)
    }
    return(
        <>
        <Nav/>
        <div className="sign">
            <div className="instr">Please Fill in the form to create an account</div><br/>
            <form onSubmit ={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} type="text" name="fname" placeholder="first Name" id="fname" value={data.fname} required/> &nbsp; &nbsp;
            <input onChange={(e)=>handle(e)} type="text" name="lname" placeholder="last Name" id="lname" value={data.lname} required/><br/><br/>
            <input onChange={(e)=>handle(e)} type="text" name="email" placeholder="email address" id="email" value={data.email} required/><br/><br/>
            <input onChange={(e)=>handle(e)} type="text" name="phone" placeholder="phone number" id="phone" value={data.phone} required/><br/><br/>
            <input onChange={(e)=>handle(e)} type="password" name="password" placeholder="Password"  id="pswd" value={data.pswd} required/><br/><br/>
            <input onChange={(e)=>handle(e)} type="password" name="cpassword" placeholder=" confirm Password" id="cpswd" value={data.cpswd}  required/><br/><br/>
            <Alert variant="danger"show={data.show}  onClose={() => setData({show:false})} dismissible>
                <p>Password doesnot match !</p>
            </Alert>
            <button id="btn">submit</button>
            </form>
        </div>
        </>
    )
}

export default Signup;