import React from 'react'
import './About.css';
import image3 from './images/image3.jpg';
export default function About() {
  return (
    <div>
         <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                  <div className="column left">
                      <img src={image3} alt="" />
                  </div>
                  <div className="column right">
                      <div className="text">I am Noorfsha and I'm a <span>Web Designer</span></div>
                      <p>A self taught developer who loves to codes something that will impact majority of the people in good way. I create responsive websites that are displayed on all devices desktops and smartphones. Of course, before begin developing any webapp, LandingPage, Business Website or E-commerce.I need to have a ready made project layout(sketch).And I'm ready to do this for you, before we start developing your website, we will discuss all the details of your niche with you.</p>
                      <a href="Noorfsha resume.pdf" download="Noorfsha resume.pdf">Download CV</a>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}
