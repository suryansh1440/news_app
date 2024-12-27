import React from 'react'
import './RegisterCard.css'

const RegisterCard = (props) => {
  return (
    <div className='registerContanier'  style={{height: props.isRegisterOpen ? '100%':'0%'}}>
      <div className="pop_upRegisterContanier">
        <div className="pop_upRegister">

            <h2>Register Here</h2>
            <label >Username</label>
            <input type="text" id="register1" placeholder="Enter Username"/>
            <label >Email</label>
            <input type='email' id="register2" placeholder="Enter Email"/>
            <label >Password</label>
            <input id="register3" type="password" placeholder="Enter Password"/>
            <label >Repeat your Password</label>
            <input id="register4" type="password" placeholder="Enter Password"/>
            <button id="registerSubmit">Submit</button>
            <p>Already have account! Login <button id="registerBack" onClick={()=>{props.setIsRegisterOpen(0); props.setIsLogInOpen(1)}}>Here</button> </p>
            <button id="closeRegisterButton" onClick={()=>{props.setIsRegisterOpen(0)}}><i className="fa-solid fa-xmark"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RegisterCard
