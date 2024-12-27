import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import logo from '../assets/logo.png';

const Navbar = (props) => {
    const [inputValue,setInputValue] = useState("");


    function handleText(e){
        setInputValue(e.target.value);
    }
    function handleSearch(){
        props.setTopic(inputValue.replace(/ /g,'+'));
        setInputValue("");
        props.setContent('news')
    }
    function handleEnterSearch(e){
        if(e.key=='Enter'){
           handleSearch();
        }
    }

  return (
    <div className='navbarContanier'>
        <div id="mainLogo" onClick={()=>{props.setContent('news')}}>
            <img src={logo} alt=""/>
        </div>  
        <div id="about" onClick={()=>{props.setContent('about')}}>
            <p>About Us</p>
        </div>  
        <div id="searchBar">
            <input id='mainSearchText' value={inputValue} type="text" placeholder={props.placeHolderText} onChange={handleText} onKeyDown={handleEnterSearch}/>  
            <button id="searchButton" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>  
        </div> 
        <div id="submitNews" onClick={()=>{props.setContent('submitNews')}}>
            <p>Submit News</p>
        </div> 
        <div id="login">
            <LoginButton/>


        </div>
    </div>
  )
}

export default Navbar
