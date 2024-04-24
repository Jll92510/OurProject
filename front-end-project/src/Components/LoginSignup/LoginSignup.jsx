import React, { useState } from 'react';
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import logo_true from '../Assets/logo-true.png'

//function CheckLogin(usable_logins, proposed_login) {
//    for(let index = 0; index <= usable_logins.length; index++){
//      if(usable_logins[index[0,0]] === proposed_login[0,0]){
//        if(usable_logins[index[0,1]] === proposed_login[0,1]){
//          return 1
//        } else { return 0}
//      } else { return 0}
//    }
//  }

const LoginSignup = () => {

  const [action,setAction] = useState("Admin Login");
  const [logging,setLogging] = useState("No Login");

  const [usernameVal, setUserVal] = useState("");
  const [passwordVal, setPassVal] = useState("");

  const changeUser = () => {
    setUserVal(EventTarget.value)
  }

  const changePass = () => {
    setPassVal(EventTarget.value)
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
                    onChange={changeUser}
                    value = {usernameVal} 
                    type="text" 
                    placeholder="Username"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input 
                    onChange={changePass}
                    value = {passwordVal} 
                    type="password" 
                    placeholder="Password"/>
            </div>
        </div>
        <div className="user-button">
            <div className="incorrect-password">{logging==="Bad Login"?<div>Incorrect Username or Password! Please try again.</div>:<div></div>}</div>
            <div className="login-button">Login</div>
            <div onClick></div>
        </div>
    </div>
  )
}

export default LoginSignup