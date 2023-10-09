import React, { useState, useEffect } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { courses } from "../data"
import SearchCarousel from './SearchCarousel';
import {searchObjectsByString} from '../OpenAi/Algorithm';
const data = require('../data'); // Import the courses data


function Search({searchResults, setSearchResults, toBeSearched, setToBeSearched, conv, algorithmResponse, aiArray}) {

  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [beginner, setBeginner] = useState([]);
  const [notBeginner, setNotBeginner] = useState([]);
  // console.log(toBeSearched.length);

  var firstCharacterInSearch = toBeSearched.charAt(0);
  var firstCharacterInSearchUpper = firstCharacterInSearch.toUpperCase();
  var restOfCharactersSearch = toBeSearched.slice(1);
  var newSearchWord = firstCharacterInSearchUpper.concat(restOfCharactersSearch)
  //example toBeSearched = "python" newSearchWord = "Python"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('../course');
};

// 1) Filter CATEGORIES 2) Filter LEVEL 
// 3) Shufflle New array 4) MAP to div cards styles

//  1 Filter searchwords === course category (DONE)
useEffect(() => {
  const categorizedCourses = searchObjectsByString(data, toBeSearched);
  const shuffledData = [...categorizedCourses];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  setCategory(shuffledData);
  // console.log(categorizedCourses);
  // console.log("All levels in categorizedCourses:", categorizedCourses.map(course => course.level));
  const filteredBeginnerCourses = categorizedCourses.filter((course) => {
    return course.level.toLowerCase() === "beginner";
  });
  setBeginner(filteredBeginnerCourses);
  // console.log("beginners courses: ", filteredBeginnerCourses);
  const filteredNotBeginnerCourses = categorizedCourses.filter((course) => {
    return course.level.toLowerCase() !== "beginner";
  });
  setNotBeginner(filteredNotBeginnerCourses);
  // console.log("Everything except beginners courses: ", filteredNotBeginnerCourses);
}, [toBeSearched]);

// 2 Filter filter Course Level
// a) Easy
// const filteredBeginnerCourses = filteredCategorizedCourses.filter((course)=>{
//   return course.level.toLowerCase() == "beginner"
// })
// b) Intermediate
// const filteredIntermediateCourses = filteredCategorizedCourses.filter((course)=>{
//   return course.level.toLowerCase() == "intermediate"
// })
// c) Any
// const filteredAdvancedCourses = filteredCategorizedCourses.filter((course)=>{
//   return course.level.toLowerCase() !== "beginner" && course.level.toLowerCase() !== "intermediate";
// })

///3 Randomize indexes in new arrays
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// 3a Beginner
// shuffleArray(filteredBeginnerCourses);
// var beginnerLoadedCategories = filteredBeginnerCourses.slice(0, 3);
//3b Intermediate
// shuffleArray(filteredIntermediateCourses);
// var intermeidateLoadedCategories = filteredIntermediateCourses.slice(0,3);
///3c Any 
// shuffleArray(filteredAdvancedCourses)
// var advancedLoadedCategories = filteredAdvancedCourses.slice(0,3);

//4 Map it out 
{/* <div key={index} className="carousel-slide">
<img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />
<p className="carousel-title">{course.title}</p>
</div> */}

  return (
    <>
    {category.length > 0 ? (
    <div className='search-carousels'>
    <div className='search-header'>{newSearchWord}</div>
    <div className='search-results'>{category.length} results</div>
    <button className="filter-btn">Filters</button>
    <div className='title-container'>All Courses relating to {newSearchWord}</div>
    
    <SearchCarousel toBeSearched={toBeSearched} conv={conv} category={category}/>
 
    <div className='title-container'>{newSearchWord} for beginners</div>

    <SearchCarousel toBeSearched={toBeSearched} conv={conv} category={beginner}/>

    <div className='title-container'>Intermediate and advanced {newSearchWord}</div>

    <SearchCarousel toBeSearched={toBeSearched} conv={conv} category={notBeginner}/>

    <div className='title-container'></div>
    </div>       
) : null}
    </>
  );
}

export default Search;