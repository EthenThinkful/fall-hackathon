import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MyCourses.css';

function MyCourses() {
  return (
    <>
        <NavBar />
        <div className='all-content'>
            <div className='top-section'>
                <div className='top-content'>
                    <img src='../Images/arrow2.jpg' />
                    <h1>Traditional Italian Cooking</h1>
                    <p>Jamie's Kitchen</p>
                    <img src={require('../Images/kitchen.png')} />
                    <div className='row'>
                        <p>24,000 Likes</p>
                        <button id='LikeButton'>Like</button>
                        <button id='ShareButton'>Share</button>
                    </div>
                </div>
                <div className='scroll-container'>
                    <div class='content'>
                        <h4>Assignment due October 27</h4>
                        <p>15 Lessons (1 hr 28 min)</p>
                            <ol>
                            <img src='../Image/check-mark.png' />
                                <li><span class='checked'>Italian Spices</span></li>
                                <li>Pantry Must Haves</li>
                                <li>Cooking Utensils</li>
                                <li>Noodles</li>
                                <li>Pasta Sauce</li>
                                <li>Choosing the Best Produce</li>
                                <li>Cooking Temperatures</li>
                                <li>What is a Ravioli?</li>
                                <li>What Cheese Should I Use?</li>
                                <li>Putting It All Together</li>
                            </ol>
                        </div> 
                    </div>
                </div>
            {/* end of top section */}

            <div className='bottom-section'>
                <div className='left-container'>
                    <div className='navbar'>
                        <ul>
                            <li><a href='/about'></a><span class='underline'>About</span></li>
                            <li><a href='/reviews'></a>Reviews</li>
                            <li><a href='discussion-board'></a>Discussion Board</li>
                            <li><a href='resources'></a>Resources</li>
                            <li><a href='q-and-a'></a>Q&A</li>
                        </ul>
                    </div>
                    <div>
                        <h1>About this Class</h1>
                        <p>The course on traditional Italian cooking offers a comprehensive exploration of Italy's rich culinary heritage. Participants will delve into the fundamental principles that underpin this renowned cuisine, including an emphasis on fresh, high-quality ingredients, and the art of balancing flavors to create delectable dishes.</p>
                        <p>From mastering the art of pasta-making to understanding the nuances of regional sauces and incorporating essential Mediterranean ingredients, this course provides a hands-on and in-depth look at the techniques and traditions that have made Italian cooking a global culinary sensation. Through practical demonstrations and interactive cooking sessions, participants will gain a deep appreciation for the time-honored methods that define traditional Italian gastronomy.</p>
                    </div>
                </div>
                <div className='right-container'>
                    <h1>Teacher</h1>
                    <div className='title'>
                        <img src={require("../Images/photo.jpg")} />
                        <p>Jamie's Kitchen</p>
                        <p>45K Likes</p>
                        <button id='FollowButton'>Follow</button>
                        <p>Chef Jamie's Kitchen, curated by the visionary Chef Jamie, is a culinary sanctuary in the heart of the city. With a passion </p>
                    </div>
                </div>
            </div>
            {/* end of bottom section */}
        </div>
    </>
    )
}

export default MyCourses;
{/* 
   <div className='bottom-section'>
                <div className='container'>
                    <div className='nav-bar'>
                        <p>About</p>
                        <p>Reviews</p>
                        <p>Discussion Board</p>
                        <p>Resources</p>
                        <p>Q&A</p>
                    </div>
                </div>
                    <h1>About this Class</h1>
                    <p>The course on traditional Italian cooking offers a comprehensive exploration of Italy's rich culinary heritage. Participants will delve into the fundamental principles that underpin this renowned cuisine, including an emphasis on fresh, high-quality ingredients, and the art of balancing flavors to create delectable dishes.</p>
                    <p>From mastering the art of pasta-making to understanding the nuances of regional sauces and incorporating essential Mediterranean ingredients, this course provides a hands-on and in-depth look at the techniques and traditions that have made Italian cooking a global culinary sensation. Through practical demonstrations and interactive cooking sessions, participants will gain a deep appreciation for the time-honored methods that define traditional Italian gastronomy.</p>
                </div>
                <div className='teacher-profile'>
                    <h1>Teacher</h1>
                    <div className='title'>
                        <img src={require("../Images/photo.jpg")} />
                         <p>Jamie's Kitchen</p>
                        <p>45K Likes</p>
                        <button>Follow</button>
                        <p>Chef Jamie's Kitchen, curated by the visionary Chef Jamie, is a culinary sanctuary in the heart of the city. With a passion </p>
                    </div>  */}