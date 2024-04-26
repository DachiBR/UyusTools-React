import React from 'react';
import './homeadd.css';
import homeImage from "../../../assets/homeadd.jpg";



const Homeadd = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibilty">
    <div className="gpt3__possibility-image">
      <img src={homeImage} alt="possibility" srcSet="" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Shop with confidence at UyusTool </h4>
      <h1 className="gradient__text">
        Experience the quality and reliability of Uyustools today. 
      </h1>
      <p>
       At Uyustools, we pride ourselves on providing users with reliable and durable tools.
       Our comprehensive product line includes power tools, power tool accessories, hand tools, hardware tools, and more. 
       Backed by an attentive service system encompassing quality control, packaging, storage, transportation, marketing support, 
       and after-sales service, we've earned our reputation as a top company in the Chinese overseas tool industry.
      </p>
      <h4>
      Request Early Access to Get Started
      </h4>
    </div>
  </div>
  )
}

export default Homeadd