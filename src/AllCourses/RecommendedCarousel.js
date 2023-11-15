import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import dots from "../Images/3-buttons.png";
import { searchObjects } from "../OpenAi/Algorithm";
import { runPromt } from "../OpenAi/OpenAi";
import { useState, useEffect } from "react";
import bookmark from "../Images/icon-save.png";

function RecommendedCarousel({email, conv, data, user, inProgress}) {
  const [algorithmResponse, setAlgorithmResponse] = useState([]);
  // OpenAI API call
  const handleSend = async () => {
    const randomIndex = Math.floor(Math.random() * user.allCourses.length);
    const randomValue = user.allCourses[randomIndex];
    console.log("Random Course from allCourses: ", randomValue);
    const wordsArray = randomValue.title.split(" ");
    const firstWord = wordsArray[0];
    console.log("Random course's title's first word: ", firstWord);
    const res = await runPromt(firstWord);
    console.log("String of words (not official array): ", res);
    const resTwo = conv(res);
    console.log("String of words after being converted to safe array: ", resTwo);
    // here are the recommended courses for a user after processing of API call & business logic
    const result = searchObjects(data, resTwo);
    console.log("Recommended courses for a user: ", searchObjects(data, resTwo));
    setAlgorithmResponse(result)
    return result;
  };

  // Expensive API Call!
  // useEffect(() => {    
  //     handleSend();
  // }, []);
  // end Expensive API Call! 

  const renderSlides = algorithmResponse.map((course, index) => {
    // Replace spaces with hyphens in the course title
    const hyphenatedTitle = course.title.replace(/\s+/g, "-").toLowerCase();
    return (
      <Link
        to={`/course/${hyphenatedTitle}`}
        key={index}
        className="carousel-slide-link"
      >
        <div className="carousel-slide">
          <img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />
          {/* Ethen adding code */}
          <div className="carousel-desc-duo">
          <p className="carousel-title"><strong>{course.title}</strong></p><img src={dots} alt="dots" className="dot-menuu"/>
          <p className="carousel-instructor" style={{fontWeight: "700"}}><strong>{course.instructor}</strong></p><img src={bookmark} alt="bookmark" className="bookmark" />
          </div>
          {/* Ethen end adding code */}
        </div>
      </Link>
    );
  }) 

  return (
    <>
    {/* leave this comment */}
    {algorithmResponse.length > 0 ?
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      centerMode={true}
      centerSlidePercentage={50}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="arrow-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="angle-left-b"
            >
              <path
                fill="#8F8F8F"
                d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"
              ></path>
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="arrow-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="angle-right-b"
            >
              <path
                fill="#8F8F8F"
                d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
              ></path>
            </svg>
          </button>
        )
      }
    >
      {renderSlides}
    </Carousel>
     : <div className="loader"></div>} 
    </>
  );
}

export default RecommendedCarousel;