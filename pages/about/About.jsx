import React from 'react';
import { Navbar, Footer , SliderComponent } from '../../components';
import { Aboutadd } from '../../container';
import './about.css';


import { Link } from "react-router-dom";

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="custom-link">
        {children}
      </Link>
    </li>
  );
}

const About = () => {

  const sliderData = {
    slides: [
      { filename: "photo1.jpg", alt: "Photo 1" },
      { filename: "photo2.jpg", alt: "Photo 2" },
      { filename: "photo3.jpg", alt: "Photo 3" }
    ]
  };

  return (
    <>
      <Navbar />

      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Welcome to Uyustools<br /> </h1>
      </div>

      <div className="gpt3__blog-heading">
        <p className="gradient__text">At UYUSTOOLS, we extend a warm welcome to all our visitors, partners, and customers. <br /> </p>
      </div>
      <Aboutadd />

      <div className="gpt3__cta">

        <div className="gpt3__cta-content">
          <p>Incredible History of our company </p>
          <h3>Do you want to contact us? Then click here!</h3>
        </div>

        <div className="gpt3__cta-btn">
          <button type="button"><CustomLink to="/Contact">Contact</CustomLink></button>
        </div>

      </div>

      <SliderComponent data={sliderData} />


      <div className="gpt3__cta">

      <div className="gpt3__cta-content">
        <p>Incredible History of our company </p>
        <h3>Do you want to see our products? Then click here!</h3>
      </div>

      <div className="gpt3__cta-btn">
        <button type="button"><CustomLink to="/products">Products</CustomLink></button>
      </div>

      </div>  
      
      <Footer />
    </>
  );
};

export default About;
