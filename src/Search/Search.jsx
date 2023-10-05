import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CoursesList from '../Course/CoursesList';
import './Search.css';
import { useNavigate } from 'react-router-dom';
//import data here


function Search({searchResults, setSearchResults, toBeSearched, setToBeSearched}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(searchResults.length);
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
: `ALL OF THE SEARCH RESULTS FOR ${toBeSearched.toUpperCase()} (EX)`}
    </>
  );
}

export default Search;