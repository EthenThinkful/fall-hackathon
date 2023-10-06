import React, { useState } from 'react';
import './ActionButton.css';
import SignIn from '../SignIn/SignIn';

function ActionButton({quote, setQuote}) {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setQuote(!quote);
        setState(!state);
  };

  return (
    <>
      <button className="submit-btn" type="button" onClick={handleClick} style={{ display: state ? 'none' : 'flex' }}>Login</button>
      <div style={{ display: state ? 'block' : 'none' }}>
        <SignIn state={state} setState={setState} style={{ display: state ? 'block' : 'none' }}/>
      </div>
    </>
  );
}

export default ActionButton;

