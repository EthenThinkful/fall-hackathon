import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { courses } from "./data"; // Import the courses data
import "./DashComp.css"; // Import your CSS file

function ImageCarousel() {
  const renderImages = courses.map((course, index) => (
    <div key={index} className="carousel-slide">
      <img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />
      <p className="carousel-title">{course.title}</p>
      
      
    </div>
  ));

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      centerMode={true}
      centerSlidePercentage={33.33}
    >
      {renderImages}
    </Carousel>
  );
}

export default ImageCarousel;
