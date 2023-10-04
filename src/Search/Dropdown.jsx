import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
    {/* <NavBar /> */}
    <div className="dropdown" onBlur={closeDropdown}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      )}
    </div>
    </>
  );
}

export default Dropdown;