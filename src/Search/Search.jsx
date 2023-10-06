import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CoursesList from '../SingleCourse/SingleCourse';
import './Search.css';
import { useNavigate } from 'react-router-dom';
//import data here


function Search({searchResults, setSearchResults, toBeSearched, setToBeSearched}) {

  const [isOpen, setIsOpen] = useState(false);
  console.log(searchResults.length);

  var firstCharacterInSearch = searchResults.charAt(0);
  var firstCharacterInSearchUpper = firstCharacterInSearch.toUpperCase();

  var restOfCharactersSearch = searchResults.slice(1);


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

const handleSearch = () => {

}

  return (
    <>
    {/* <NavBar searchResults={searchResults} setSearchResults={setSearchResults}/><button onClick={handleSearch}>Search</button> */}
    {toBeSearched.length > 0 ? 
    <div>
     
  <br></br>
  <br></br>
<div className='result-data-container'>
      <h2>{firstCharacterInSearchUpper}{restOfCharactersSearch}</h2>
</div>
      <div className='result-data-container'>
        <p>456 results</p>
      </div>
        <br></br>
        <br></br>
        <div className='result-data-container filter-button'>Filter</div>
        <br></br>
        <br></br>
        <div className='result-data-container'> 
          <h3>{searchResults} for Beginners</h3>
        </div>
        <div className='results-cards'>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className='result-data-container'>
          <h3>{searchResults} for Intermediates</h3>
        </div>
        <div className='results-cards'>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
        </div>
        <br></br>
        <br></br>
      <div className='result-data-container'>
          <h3>More results for {searchResults}..</h3>
        </div>
          <div className="course-container">
          <button className='course-box' onClick={handleSubmit}>
          Click here to take yourself to the page for this course
        </button>
      </div>
    </div>
: `ALL OF THE SEARCH RESULTS FOR ${toBeSearched.toUpperCase()} (EX)`}
    </>
  );
}

export default Search;