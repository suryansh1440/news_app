import React from 'react'
import './About.css'
import aboutImg1 from '../assets/aboutImg1.webp'
import aboutImg2 from '../assets/aboutImg2.webp'

const About = () => {
  return (
    <div className='aboutContanier'>
        <div id="aboutTop">
            <div id="aboutTopLeft">
                <h2>Our Mission: Helping Millions of Organizations Grow Better</h2>
                <p>We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</p>
            </div>
            <div id="aboutTopRight">
                <img src={aboutImg1} alt="" />
            </div>
        </div>
        <div id="aboutBottom">
            <div id="aboutBottomLeft">
                <img src={aboutImg2} alt="" />
            </div>
            <div id="aboutBottomRight">
                <h2>Our Story</h2>
                <p>In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers did not want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.<br></br><br></br>Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
            </div>
        </div>

      
    </div>
  )
}

export default About
