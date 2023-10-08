import React from 'react';
import './SingleCourse.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import checkMark from '../Images/check-mark.png'

function SingleCourse() {
  return (
    <>
        <div className='all-content'>
            {/* begin left section */}
            <div className='left-section'>
                <div className='left-content'>
                    <div>
                        <a href='/mycourses'>
                            <img src={require('../Images/arrow.jpg')} alt='arrow' style={{marginBottom: '1rem'}}/>
                        </a>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='cooking-title'>Traditional Italian Cooking</div>
                            <div className='author-title'>Jamie's Kitchen</div>
                            <img src={require('../Images/kitchen.png')} />
                            {/* begin like share section */}
                            <div className='row'>
                                <div className='text'>24,000 Likes</div>
                                <div className='buttons'>
                                    <button id='LikeButton'><b>Like</b></button>
                                    <button id='ShareButton'><b>Share</b></button>
                                </div>
                            {/* end like share section */}
                            </div>
                            <div className='navbar'>
                                <ul>
                                    <li><a href='/about'></a><span class='underline'>About</span></li>
                                    <li><a href='/reviews'></a>Reviews</li>
                                    <li><a href='discussion-board'></a>Discussion Board</li>
                                    <li><a href='resources'></a>Resources</li>
                                    <li><a href='q-and-a'></a>Q&A</li>
                                </ul>
                            </div>    
                        </div>
                        {/* start left bottom section */}
                        <div className='left-bottom'>
                            <div style={{display: 'flex', flexDirection: 'column' }}>
                                <div style={{ textAlign: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>About this Class</div>
                                <div style={{textAlign: 'left', marginTop: '2rem'}}>
                                    The course on traditional Italian cooking offers a comprehensive exploration of Italy's rich culinary heritage. Participants will delve into the fundamental principles that underpin this renowned cuisine, including an emphasis on fresh, high-quality ingredients, and the art of balancing flavors to create delectable dishes.
                            </div>
                            <div style={{textAlign: 'left', marginTop: '2rem'}}>
                                From mastering the art of pasta-making to understanding the nuances of regional sauces and incorporating essential Mediterranean ingredients, this course provides a hands-on and in-depth look at the techniques and traditions that have made Italian cooking a global culinary sensation. Through practical demonstrations and interactive cooking sessions, participants will gain a deep appreciation for the time-honored methods that define traditional Italian gastronomy.
                        </div>
                    </div>
                </div>
                {/* end left content */}
            </div>
            {/* end left section */}

            {/* begin right section */}
            <div className='right-section'>
                <div className='right-content'>
                    {/* scroll container */}
                    <div className='scroll-container'>
                        <div class='content'>
                            <h4>Assignment due October 27</h4>
                            <div style={{paddingLeft: '.5rem'}}>15 Lessons (1 hr 28 min)</div>
                                <ol>
                                    <div style={{display: 'flex' }}>
                                        <span className='checkmark'></span>
                                        <li>Italian Spices</li>
                                    </div>
                                    <div style={{display: 'flex' }}>
                                        <span className='checkmark'></span>
                                        <li>Pantry Must Haves</li></div>
                                    <div style={{display: 'flex'}}>
                                        <span className='checkmark'></span>
                                        <li>Cooking Utensils</li></div>
                                    <div style={{display: 'flex'}}>
                                        <span className='checkmark'></span>
                                        <li>Noodles</li>
                                    </div>
                                    <div className='no-checkmark'>   
                                        <li>Pasta Sauce</li>
                                        <li>Choosing the Best Produce</li>
                                        <li>Cooking Temperatures</li>
                                        <li>What is a Ravioli?</li>
                                        <li>What Cheese Should I Use?</li>
                                        <li>Putting It All Together</li>
                                    </div>
                                </ol>
                            </div>
                        </div>
                    {/* end scroll container */}                  
                    </div>

                    {/* start right container */}
                    <div className='right-bottom'>
                        {/* start flex column */}
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {/* 1.) */}
                            {/* start teacher */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontFamily: 'Nobile', fontSize: '20px', fontWeight: 'bold' }}>
                                <div>Teacher</div>
                            </div>
                            {/* end teacher */}

                            {/* 2.) */}
                            {/* start teacher profile picture and course title / likes */}
                            <div style={{ display: 'flex' }}>
                                <div className='image'>
                                    <img src={require("../Images/photo.png")} />
                                </div>
                                <div className='title'>
                                    <p>Jamie's Kitchen</p>
                                    <p>45K Likes</p>
                                </div>
                            </div>
                            {/* end teacher profile picture and course title / likes */}

                            {/* 3.) */}
                            {/* start button */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <button id='FollowButton'><b>Follow</b></button>
                            </div>
                            {/* end button */}

                            {/* 4.) */}
                            {/* start description */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap'}}>
                                <div style={{ textAlign: 'left', fontSize: '14px' }}>Chef Jaime's Kitchen, curated by the visionary Chef Jamie, is a culinary sanctuary in the heart of the city. With a passion for flavors and a dedication to using the finest ingredients, Chef Jamie crafts exceptional dishes that leave a lasting impression. </div>
                            </div>
                            {/* end description */}
                        </div>
                        {/* end flex column */}
                        </div>
                    {/* end right bottom */}
                    </div>
                {/* end right content */}
                </div>
            {/* end right section */}
            </div>
        </div>
    </>
  )
}

export default SingleCourse;

