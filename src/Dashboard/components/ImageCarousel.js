import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { courses } from "./data"; // Import the courses data
import "./DashComp.css"; // Import your CSS file

function ImageCarousel() {
  const images = courses.map((course) => course.image);

  const renderImages = images.map((image, index) => (
    <div key={index}>
      <img src={image} alt={`Image ${index + 1}`} />
    </div>
  ));

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false} // Set autoPlay to false
      centerMode={true} // Enable center mode
      centerSlidePercentage={33.33} // Display 3 images at a time
    >
      {renderImages}
    </Carousel>
  );
}

export default ImageCarousel;