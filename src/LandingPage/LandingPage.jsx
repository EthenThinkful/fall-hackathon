import React from 'react';
import './LandingPage.css';
import ActionButton from './ActionButton';
import { useState } from 'react';
import SignIn from '../SignIn/SignIn';


const LandingPage = ({quote, setQuote}) => {
    const [state, setState] = useState(false);
    
    const divStyle = {
        position: 'absolute',
        height: '220.5px',
        width: '288px',
        top: '10px',
        left: '30px',
      };

    return (
        <> 
        <div>
            <div className='header' style={{backgroundColor: '#344D56', justifyContent: 'space-between'}}>
                <h1 className='logo-container'>
                    <img src={require('../Images/logo-skillverse.png')} alt='Logo' className='skillverse-logo'/> 
                </h1> 
                <ActionButton setQuote={setQuote} state={state} setState={setState}/>
            </div>
            <div className="h3" style={{backgroundColor: '#344D56', margin:'0', paddingBottom: '1rem'}}>Learn on Your Own Time</div>
        </div>
            <div className="background-image-text-button">
                <div className='background-image'>
                </div>
                <div className="text-overlay" style={{ display: quote ? 'none' : 'block' }}>
                    <p>Ready to learn? Enter your email to get started.</p>
                    <form>
                        <input type='email' id='email' name='email' placeholder='Email Address' style={{margin: '.5rem 0', padding: '.5rem', border: 'none'}} required />
                        <button className='arrow-button' type='submit' style={{margin: '.5rem .5rem', padding: '.5rem', border: 'none', backgroundColor: '#D0ADDC'}}>Let's go!</button>
                    </form>
                </div>
                <div style={{ display: state ? 'block' : 'none' }}>
                    <SignIn state={state} setState={setState}/>
                </div>
            </div>
            <footer style={{ backgroundColor: '#344D56', color: 'white', textAlign: 'center'}} className='footer'></footer>
        </>
    )
}

export default LandingPage;