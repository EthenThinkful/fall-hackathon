import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import CoursesList from '../SingleCourse/SingleCourse';
import './Search.css';
import { useNavigate } from 'react-router-dom';
//import data here


function Search({searchResults, toBeSearched, algorithmResponse}) {
  const [isOpen, setIsOpen] = useState(false);
  const [renderCourses, setRenderCourses] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  console.log(searchResults.length);

  var firstCharacterInSearch = searchResults.charAt(0);
  var firstCharacterInSearchUpper = firstCharacterInSearch.toUpperCase();
  var restOfCharactersSearch = searchResults.slice(1);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('../course');
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~james code (uncomment your return statement and comment mine to continue making changes to yours~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   return (
//     <>
//     {/* <NavBar searchResults={searchResults} setSearchResults={setSearchResults}/><button onClick={handleSearch}>Search</button> */}
//     {toBeSearched.length > 0 ? 
//     <div>
     
//   <br></br>
//   <br></br>
// <div className='result-data-container'>
//       <h2>{firstCharacterInSearchUpper}{restOfCharactersSearch}</h2>
// </div>
//       <div className='result-data-container'>
//         <p>456 results</p>
//       </div>
//         <br></br>
//         <br></br>
//         <div className='result-data-container filter-button'>Filter</div>
//         <br></br>
//         <br></br>
//         <div className='result-data-container'> 
//           <h3>{searchResults} for Beginners</h3>
//         </div>
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
//         <div className='result-data-container'>
//           <h3>{searchResults} for Intermediates</h3>
//         </div>
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
//       <div className='result-data-container'>
//           <h3>More results for {searchResults}..</h3>
//         </div>
//           <div className="course-container">
//           <button className='course-box' onClick={handleSubmit}>
//           Click here to take yourself to the page for this course
//         </button>
//       </div>
//     </div>
// : `ALL OF THE SEARCH RESULTS FOR ${toBeSearched.toUpperCase()} (EX)`}
//     </>
//   );
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~end james code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

return (
  <>
    {toBeSearched.length === 0 ?
      <div>
        <h1>Search Page</h1>
        <div>{searchResults}</div>
        <div className="course-container">
          <button className='course-box' onClick={handleSubmit}>
            Click here to take yourself to the page for this course
          </button>
        </div>
      </div>
      : <><div>ALL OF THE SEARCH RESULTS FOR {toBeSearched.toUpperCase()}</div><div className='openai-images'>{renderCourses} {algorithmResponse.length > 0 ? algorithmResponse.map((item, i) => <div className='image-container'><img src={item.image} className='openai-image'></img><div className='openai-description'><div style={{ marginTop: "1rem"}}>{item.title}<br />by</div><div className='h5'>{item.instructor}</div></div></div>) : null} </div></>}
  </>
);
}

export default Search;

