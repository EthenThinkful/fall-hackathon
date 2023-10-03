import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

// Defines the landing page of the application

function SignIn() {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('./dashboard');
    };

    return (
        <>
            <div style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                <h1>Skillverse</h1>
            </div>
            <div className="parent">
                <div className="sign-in-container">
                    <div style={{ textAlign: 'left', paddingBotton: '0rem', marginBottom: '3rem' }}>
                        <h2 href="/dashboard">Sign In</h2>
                        <p>or <a href="#" className="custom-link">Create an Account</a></p></div>
                    <form onSubmit={handleSubmit}>
                        <div className="sign-in-input">
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="email"
                                style={{ textAlign: 'left' }}
                            />
                        </div>
                        <div className="sign-in-input">
                            {/* <label htmlFor="password">Password:</label> */}
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="password"
                                style={{ textAlign: 'left' }}
                            />
                        </div>
                        <div className="sign-in-btns-container">
                            <div><button type="submit" className="submit-btn">Sign In</button></div>
                            <button className="sign-in-btns">G</button>
                            <button className="sign-in-btns">Li</button>
                            <button className="sign-in-btns">F</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default SignIn;