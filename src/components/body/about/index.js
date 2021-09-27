import React from 'react';
import './about.css';
function About() {
    return 
    <div className="about">
     <div className="about-top">
            <div className="about-info">
                Hello there 👋, I am 
                <br/> <span className="info-name">Marcelino Oktaviansyah</span>.
                <br/>I Love experimenting with the web.
            </div> 
            <div className="about-photo">
                <img src={requestAnimationFrame('../../../assets/coding.png')} 
                className="picture"/>
            </div>
        </div>
        <div className="about-bottom">This is contact</div>
    </div>    
}

export default About
