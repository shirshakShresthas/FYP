import React, {useState} from 'react';
import Axios from 'axios';
import './Signup.css';
import { Button, Modal,Form} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
function Signup(){
    const url="http://localhost:2000/api/user/store"
    const [data, setData]= useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        pswd:"",
        cpswd:"",
        show:false,
        fnameError:'bb hh',
       lnameError:'',
       emailError:'',
       phoneError:'',
       pswdError:'',
       cpswdError:''
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
               
                    
                "password":data.pswd,  
                "contact_number":data.phone,
                               
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
        
        
        <div className="sign">
            <div className="instr"><p style={{color:"crimson"}}> * Please fill the form to create an account</p></div><br/>
            <form onSubmit ={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} type="text" name="fname" placeholder="first Name" id="fname" value={data.fname} required /> &nbsp; &nbsp;
            
            <input onChange={(e)=>handle(e)} type="text" name="lname" placeholder="last Name" id="lname" value={data.lname} required/><br/><br/>
            <input  onChange={(e)=>handle(e)} type="text" name="email" placeholder="email address" id="email" value={data.email} required/>
            <br/><br/>
            <input onChange={(e)=>handle(e)} type="text" name="phone" placeholder="phone number" id="phone" value={data.phone} required/>
            <br/><br/>
            <input onChange={(e)=>handle(e)} type="password" name="password" placeholder="password"  id="pswd" value={data.pswd} required/><br/><br/>
            <input onChange={(e)=>handle(e)} type="password" name="cpassword" placeholder=" confirm password" id="cpswd" value={data.cpswd}  required/><br/><br/>
            
            <button id="btn" style={{width:"100px"}}>Submit</button>
            </form>
            
        </div>
        </>
    )
}

export default Signup;