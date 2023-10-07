import React, { useState } from 'react';
import './ActionButton.css';

function ActionButton({quote, setQuote, state, setState}) {

    const handleClick = () => {
        setQuote(!quote);
        setState(!state);
    };

  return (
    <>
      <button className="submit-btn" type="button" onClick={handleClick} style={{ display: state ? 'none' : 'flex' }}>Login</button>
    </>
  );
}

export default ActionButton;