import React, { useState } from 'react';
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import logo_true from '../Assets/logo-true.png'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const LoginSignup = () => {

  const [action,setAction] = useState("Admin Login");
  const [logging,setLogging] = useState("No Login");
  const [loginNum, setLoginNum] = useState(null);
  const [user_id, setUserVal] = useState("");
  const [user_password, setPassVal] = useState("");
  const history = useNavigate();

  function loginAttempt () {
    console.log("Made To loginAttempt");
    setLogging("No Login")
    const user = {user_id, user_password}
      axios.post(`http://localhost:8080/customer/login`,user)
      .then((response) =>{
        console.log(response.status, response.data);
        setLoginNum(response.data);
        
    if(loginNum === 0){
      setLogging("Bad Login")
    }
    else if (loginNum === 1){
      setLogging("Good Login")
      history("/tabs");
      if(action === "Admin Login"){
        console.log("Successful Admin Login")
      }else{
        console.log("Successful User Login")
      }
    }
  });

  }

  return (
    <div className='container'>
        <div className="logo">
            <img 
                width="300"
                height="auto"
                src={logo_true} alt=""/>
        </div>
        <div className="header">
            <div className="text">{action}</div>
            {/* <div className="underline"></div> */}
            <div className="subtext">Please select desired login type:</div>
        </div>
        <div className="submit-container">
            <div className={action==="User Login"?"submit gray":"submit"} onClick= {()=>{setAction("Admin Login")}}>Admin Login</div>
            <div className={action==="Admin Login"?"submit gray":"submit"} onClick={()=>{setAction("User Login")}}>User Login</div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input
                    onChange={e => setUserVal(e.target.value)}
                    value = {user_id} 
                    type="text" 
                    placeholder="Username"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input 
                    onChange={e => setPassVal(e.target.value)}
                    value = {user_password} 
                    type="text" 
                    placeholder="Password"/>
            </div>
            {/* <div className = "incorrect-password">
              {loginNum}
            </div> */}
        </div>
        <div className="user-button">
            <div className="incorrect-password">{logging==="Bad Login"?<div>Incorrect Username or Password! Please try again.</div>:<div></div>}</div>
            <div className="login-button" onClick={()=> loginAttempt() & console.log("on click works!")}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup