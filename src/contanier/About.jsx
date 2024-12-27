import React from 'react'
import './About.css'
import aboutImg1 from '../assets/aboutImg1.webp'
import aboutImg2 from '../assets/aboutImg2.webp'

const About = () => {
  return (
    <div className='aboutContanier'>
        <div id="aboutTop">
            <div id="aboutTopLeft">
                <h2>Our Mission: Empowering Communities with Reliable News</h2>
                <p>At News Hub, we believe in not just delivering news, but in fostering informed communities. Our mission is to provide accurate, timely, and engaging news that empowers our readers to make informed decisions and engage meaningfully with the world around them.</p>
            </div>
            <div id="aboutTopRight">
                <img src={aboutImg1} alt="" loding="lazy" />
            </div>
        </div>
        <div id="aboutBottom">
            <div id="aboutBottomLeft">
                <img src={aboutImg2} alt="" loding="lazy"/>
            </div>
            <div id="aboutBottomRight">
                <h2>Our Story</h2>
                <p>Founded in 2024, News Hub emerged from a shared vision among a group of passionate journalists and tech enthusiasts who recognized the need for a trustworthy news source in an age of information overload. We saw that people were overwhelmed by noise and misinformation, and they craved clarity and context.<br></br><br></br>

Since our launch, we are dedicated ourselves to curating high-quality content that resonates with our audience. Under the leadership of Suryansh Singh, we are transformed our platform into a comprehensive news hub, leveraging cutting-edge technology to deliver personalized news experiences.</p>
            </div>
        </div>

      
    </div>
  )
}

export default About
