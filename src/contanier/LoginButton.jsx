import React, { useContext } from 'react'
import './LogoutButton.css'
import { loginOpen } from '../App'

const LoginButton = (props) => {
  const setIsLoginOpen = useContext(loginOpen)
  return (
    <div className='buttonContanier' onClick={()=>{setIsLoginOpen(1)}} >
      <p>Login</p>
    </div>
  )
}

export default LoginButton
