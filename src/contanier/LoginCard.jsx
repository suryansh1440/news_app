import React, { useState } from 'react'
import './LoginCard.css'
const LoginCard = (props) => {
  
  
  return (
    <div className='loginContanier'  style={{ height: props.isLogInOpen ? '100%':'0%' }}>
      <div className="pop_upContanier">
        <div className="pop_up">

          <h2>Login Here</h2>
          <label >Username</label>
          <input type="text" id="login1" placeholder="Enter Username"/>
            <label >Password</label>
            <input id="login2" type="password" placeholder="Enter Password"/>
              <button id="loginSubmit">Submit</button>
              <p>Don't have account! register <button id='loginBack' onClick={()=>{props.setIsRegisterOpen(1);props.setIsLogInOpen(0) }}>Here</button> </p>
              <button id="closeButton" onClick={()=>{props.setIsLogInOpen(0)}}><i className="fa-solid fa-xmark"></i></button>
            </div>
        </div>
      </div>
      )
}

      export default LoginCard
