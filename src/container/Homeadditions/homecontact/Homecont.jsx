import React from 'react';
import './homecont.css';
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
const Homecont = () => {
  return (
<div className="gpt3__footer-heading">
  <h1 className="gradient__text"> გსურთ დაგვიკავშირდეთ? მაშინ დაკლიკეთ აქ! </h1>
  <div className="gpt3__cta-btn">
    <CustomLink to="/contact"><button type="button"> დაგვიკავშირდით </button></CustomLink>
  </div>
</div>



  )
}

export default Homecont
