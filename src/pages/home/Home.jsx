import React from 'react';
import { Navbar, Footer, Carousel} from '../../components';
import {Homeadd , Homecont} from '../../container/';
import "./home.css";
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

const sliderData = {
  slides: [
    { filename: "photo1.jpg", alt: "Photo 1" },
    { filename: "photo2.jpg", alt: "Photo 2" },
    { filename: "photo3.jpg", alt: "Photo 3" },
    { filename: "photo4.jpg", alt: "Photo 4" },
    { filename: "photo5.jpg", alt: "Photo 5" },
    { filename: "photo6.jpg", alt: "Photo 6" },
    { filename: "photo7.jpg", alt: "Photo 7" },
  ]
};


const Home = () => {
  return (
    <>
     <Navbar />

    <div className="blog-heading">

        <h1 >
          <span className="big-text"> მოგესალმებით UyusTools - ზე </span> <br />
          <span className="small-text"> ერთი ბრენდი, ხანგრძლივი თანამშრომლობა </span>
        </h1>

    </div>

    <div className="cta">

      <div className="cta-content">
          <p> ჩვენი კომპანიის ისტორია </p>
          <h3> გსურთ ჩვენი კომპანიის შესახებ გაიგოთ? მაშინ დააკლიკეთ აქ! </h3>
      </div>

      <div className="cta-btn">
        <button type="button"><CustomLink to="/about"> ჩვენს შესახებ </CustomLink></button>
      </div>

    </div>



    <div className="footer-heading">
      
      <h1 className="big-text"> გსურთ ჩვენი პროდუქციის ნახვა? მაშინ დაკლიკეთ აქ! </h1>

      <div className="cta-btn2">
        <button type="button"><CustomLink to="/products"> პროდუქცია </CustomLink></button>
      </div>


      <div className="carousel">
        <Carousel data={sliderData} />
      </div>

      

    </div>

    <Homeadd />
    
    <Homecont />

     <Footer />
    </>
   
  )
}

export default Home
