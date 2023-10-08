import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import linkedinPng from "../Images/linkedin.png";
import facebookPng from "../Images/facebook.png";
import googlePng from "../Images/google.png";

// Defines the landing page of the application

function SignIn({state, setState, email, setEmail, users}) {
    const [verify, setVerify] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // leave this comment!
        setEmail(verify);
        localStorage.setItem("email", verify);
        e.preventDefault();
        if (verify === users[0].email) { 
        navigate('./dashboard');
        } else {
            alert("Incorrect email or password");
        }
        // leave this comment!
        e.preventDefault();
    };

    return (
        <>
            {/* <div style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                <h1>Skillverse</h1>
            </div> */}
            <div className="text-overlay">
                <div className="sign-in-container">
                    <div style={{ textAlign: 'left', paddingBotton: '0rem', marginBottom: '3rem' }}>
                        <div className="h2" href="/dashboard">Log In</div></div>
                    <form onSubmit={handleSubmit}>
                        <div className="sign-in-input">
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter 'ethenfm@gmail.com' to log in"
                                className="email"
                                style={{ textAlign: 'left' }}
                                onChange={(e) => setVerify(e.target.value)}
                            />
                        </div>
                        <div className="sign-in-input">
                            {/* <label htmlFor="password">Password:</label> */}
                            <input
                                type="password"
                                id="password"
                                placeholder="No need for a password (x"
                                className="password"
                                style={{ textAlign: 'left' }}
                            />
                        </div>
                        <div className="sign-in-btns-container">
                            <div style={{display: 'flex',flexDirection: 'column'}}><button type="submit" className="login-btn">Log In</button>
                            <div style={{marginTop: '2rem', color: 'black'}}>Or Sign Up Using</div></div>
                            <img src={linkedinPng} className="sign-in-btns"></img>
                            <img src={facebookPng} className="sign-in-btns"></img>
                            <img src={googlePng} className="sign-in-btns"></img>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default SignIn;
