import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./carousel.css";
import image1 from "./images/photo1.jpg";
import image2 from "./images/photo2.jpg";
import image3 from "./images/photo3.jpg";
import image4 from "./images/photo4.jpg";
import image5 from "./images/photo5.jpg";
import image6 from "./images/photo6.jpg";
import image7 from "./images/photo7.jpg";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === data.slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const images = [image1, image2, image3, image4, image5, image6, image7]; 

  return (
    <div className="slider-container"> 


      <div className="slider">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        <div className="slides">
          {data.slides.map((slide, idx) => (
            <img
              key={idx}
              src={images[idx]} 
              alt={slide.alt}
              className={currentSlide === idx ? "slide" : "slide slide-hidden"}
            />
          ))}
        </div>
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <div className="indicators">
          {data.slides.map((_, idx) => (
            <button
              key={idx}
              className={currentSlide === idx ? "indicator active" : "indicator"}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default Carousel;
