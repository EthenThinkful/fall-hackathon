import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Search.css';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
    <NavBar />
    <div>
      <h1>Search Page</h1>
      <div className="course-container">
      <button className='course-box' onClick={handleSubmit}>
        Click here to take yourself to the page for this course
      </button>
      </div>
    </div>
    </>
  );
}

export default Search;