import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import { courses } from "./data"; // Import the courses data
import "./DashComp.css"; // Import your CSS file
import dots from "../../Images/3-buttons.png";

function ImageCarousel() {
  const renderSlides = courses.map((course, index) => {
    // Replace spaces with hyphens in the course title
    const hyphenatedTitle = course.title.replace(/\s+/g, "-").toLowerCase();

    return (
      <Link
        to={`/courses/${hyphenatedTitle}`}
        key={index}
        className="carousel-slide-link"
      >
        <div className="carousel-slide">
          <img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />
          {/* Ethen adding code */}
          <div className="carousel-desc-duo">
          <p className="carousel-title"><strong>{course.title}</strong></p>
          <p className="carousel-instructor"><strong>{course.instructor}</strong></p>
          </div>
          {/* Ethen end adding code */}
        </div>
      </Link>
    );
  });

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      centerMode={true}
      centerSlidePercentage={50}
    >
      {renderSlides}
    </Carousel>
  );
}

export default ImageCarousel;
