import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import { courses } from "./data"; // Import the courses data
import "./DashComp.css"; // Import your CSS file

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
          <p className="carousel-title">{course.title}</p>
          {/*<p className="carousel-instructor">{course.instructor}</p>*/}
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
      centerSlidePercentage={33.33}
    >
      {renderSlides}
    </Carousel>
  );
}

export default ImageCarousel;
