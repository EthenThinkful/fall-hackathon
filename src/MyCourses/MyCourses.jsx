import React from 'react';
import './MyCourses.css';
import MyCoursesCarousel from './MyCoursesCarousel';
import InProgressCarousel from './InProgressCarousel';
import RecommendCarousel from './RecommendCarousel';
import { useState, useEffect } from 'react';
import users from "../users";
import data from "../data";

function MyCourses({email, conv, user, inProgress}) {
  // const [inProgress, setInProgress] = useState([]);
  // useEffect(() => {
  //   users.map((user) => {
  //     if (localStorage.getItem("email") === user.email) {
  //       setInProgress(user.inProgress);
  //       console.log(user.inProgress)
  //     } else {
  //       return null;
  //     }
  //   });
  // }, []);
  return (
    <>
    <div className='search-carousels'>
    <div className='search-header'>My Courses</div>
    <div className='title-container'>Saved for Later</div>
    
    <MyCoursesCarousel user={user}/>
 
    <div className='title-container'>Pick Up Where You Left Off</div>

    <InProgressCarousel inProgress={inProgress}/>

    <div className='title-container'>Recommended For You (Generative AI)</div>

    <RecommendCarousel conv={conv} data={data} users={users} email={email} inProgress={inProgress}/>

    <div className='title-container'></div>
    </div>
    </>
  )
}

export default MyCourses