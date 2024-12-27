import React, { useState, createContext } from 'react';
import Navbar from './contanier/Navbar';
import './App.css';
import LoginCard from './contanier/LoginCard';
import RegisterCard from './contanier/RegisterCard';
import NewsContent from './contanier/NewsContent';
import About from './contanier/About';
import SubmitNews from './contanier/SubmitNews';
const loginOpen = createContext();


const App = () => {
  const [isLogInOpen,setIsLogInOpen] = useState(0);
  const [isRegisterOpen,setIsRegisterOpen] = useState(0);
  const [searchText,setSearchText] = useState("Search here");
  const [topic, setTopic] = useState("Latest News");
  const [content,setContent] = useState('news');


  return (
    <div className='appContanier'>
      <LoginCard isLogInOpen={isLogInOpen} setIsLogInOpen={setIsLogInOpen} setIsRegisterOpen={setIsRegisterOpen}/>
      <RegisterCard setIsLogInOpen={setIsLogInOpen} setIsRegisterOpen={setIsRegisterOpen} isRegisterOpen={isRegisterOpen}/>
      <div className="overeffect" style={{display: isLogInOpen || isRegisterOpen ? 'block' : 'none'}}> </div>

      <div id="nav">
        <loginOpen.Provider value={setIsLogInOpen}>
        <Navbar setTopic={setTopic} placeHolderText={searchText} setContent={setContent}/>
        </loginOpen.Provider>
      </div>
      
      <div id="contentContanier">
        {content==='news' && (<NewsContent topic={topic} setTopic={setTopic} setSearchText={setSearchText} />)}
        {content==='about' && (<About/>)}
        {content==='submitNews' && (<SubmitNews/>)}
        
      </div>
    
    </div>
  );
}

export default App;
export {loginOpen};