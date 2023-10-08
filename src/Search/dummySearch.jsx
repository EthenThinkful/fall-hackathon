// import React, { useState } from 'react';
// import './Search.css';
// import { useNavigate } from 'react-router-dom';
// import { courses } from "../data"
// //import data here


// function Search({searchResults, setSearchResults, toBeSearched, setToBeSearched, algorithmResponse}) {

//   const [isOpen, setIsOpen] = useState(false);
//   console.log(toBeSearched.length);

//   var firstCharacterInSearch = toBeSearched.charAt(0);
//   var firstCharacterInSearchUpper = firstCharacterInSearch.toUpperCase();
//   var restOfCharactersSearch = toBeSearched.slice(1);
//   var newSearchWord = firstCharacterInSearchUpper.concat(restOfCharactersSearch)
//   //example toBeSearched = "python" newSearchWord = "Python"

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('../course');
// };


// // 1) Filter CATEGORIES 2) Filter LEVEL 
// // 3) Shufflle New array 4) MAP to div cards styles

// /// 1 Filter searchwords === course category (DONE)
// const filteredCategorizedCourses = courses.filter((course)=> {
//   return  course.category.toLowerCase() === searchResults.toLowerCase()
// })

// ///2 Filter filter Course Level
// // a) Easy
// const filteredBeginnerCourses = filteredCategorizedCourses.filter((course)=>{
//   return course.level.toLowerCase() == "beginner"
// })
// // b) Intermediate
// const filteredIntermediateCourses = filteredCategorizedCourses.filter((course)=>{
//   return course.level.toLowerCase() == "intermediate"
// })
// // c) Any
// const filteredAdvancedCourses = filteredCategorizedCourses.filter((course)=>{
//   return course.level.toLowerCase() !== "beginner" && course.level.toLowerCase() !== "intermediate";
// })

// ///3 Randomize indexes in new arrays
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // 3a Beginner
// shuffleArray(filteredBeginnerCourses);
// var beginnerLoadedCategories = filteredBeginnerCourses.slice(0, 3);
// //3b Intermediate
// shuffleArray(filteredIntermediateCourses);
// var intermeidateLoadedCategories = filteredIntermediateCourses.slice(0,3);
// ///3c Any 
// shuffleArray(filteredAdvancedCourses)
// var advancedLoadedCategories = filteredAdvancedCourses.slice(0,3);

// //4 Map it out 
// {/* <div key={index} className="carousel-slide">
// <img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />
// <p className="carousel-title">{course.title}</p>
// </div> */}

//   return (
//     <>
//     {/* <NavBar searchResults={searchResults} setSearchResults={setSearchResults}/><button onClick={handleSearch}>Search</button> */}
//     {toBeSearched.length > 0 ? 
//     <div>
//         <br></br>
//         <br></br>
//           <div>
//             {beginnerLoadedCategories.map((course)=>{
//               return    <div className="course-container">
//               <button className='course-box'>{course.title}</button>
//             </div>
//             })}
//           </div>
//         <br></br>
//         <br></br>
//           <div className='search-title result-data-container'>{newSearchWord}</div>
//           <div className='result-data-container'>456 results</div>
//           <br></br>
//           <br></br>
//           <br></br>
//         <div className='result-data-container filter-button'>Filter</div>
//         <br></br>
//           <br></br>
//           {/* BEGINNERS */}
//           <div className='result-data-container'> Courses relating to {newSearchWord}</div>
//         <div className='results-cards'>
          
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         {/* INTERMEDIATES */}
//           <div className='result-data-container'> Intermediate {newSearchWord} Tutorials</div>
//         <div className='results-cards'>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         {/* ANY  */}
//           <div className='result-data-container'> Advanced {newSearchWord} for Tutorials</div>
//         <div className='results-cards'>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//           <div className="course-container">
//             <button className='course-box'>HI</button>
//           </div>
//         </div>
//         <br></br>
//         {/* <br></br>
//       <div className='result-data-container'>
//           <h3>More results for {newSearchWord}..</h3>
//         </div>
//           <div className="course-container">
//           <button className='course-box' onClick={handleSubmit}>
//           Click here to take yourself to the page for this course
//         </button>
//       </div> */}
//       <br></br>
//       <br></br>
//       <br></br>
//     </div>
// : `ALL OF THE SEARCH RESULTS FOR ${toBeSearched.toUpperCase()} (EX)`}
//     </>
//   );
// }

// export default Search;