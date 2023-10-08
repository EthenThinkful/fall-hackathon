import React, { useState } from 'react';
import './NavBar.css';
import { slide as Menu } from 'react-burger-menu';
import { UilBars } from '@iconscout/react-unicons';
import { useNavigate, Link } from "react-router-dom";
import DropdownMenu from '../Search/Search.jsx';
import userPfp from '../Images/user-pfp.png';
import logo from '../Images/logo-skillverse.png'
import searchIcon from '../Images/search.png'

export default function NavBar({searchResults, setSearchResults, toBeSearched, setToBeSearched, handleSend }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

// Change Handler 
    const handleChange = (e) => {
        e.preventDefault();
        setSearchResults(e.target.value);
        // console.log(searchResults)
    }

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("pressed");
        setToBeSearched(searchResults);
        // handleSend();
        navigate('../search');
    };

    const buttonStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        outline: 'none',
    };

    return (
        <>
            <div className="header">
                <Link to={'/dashboard'} className='link'><img src={logo}/></Link>
                <Link to={'/allcourses'} className='link' style={{color:'white'}}><div> All Courses</div></Link>
                <form onSubmit={handleSubmit}>
                    <input 
                    onChange={handleChange}
                    type="search" 
                    name="search" 
                    id="search" 
                    className='input' value={searchResults} />
                    {/* Need a small submit button in the input tag */}
                </form>
                <div>My Courses</div>
                <Link to={'/profile'} className='link'><img src={userPfp} className='userPfp'/></Link>
            </div>

            <nav className="navbar">
                <div className="logo">Skillverse</div>
                <button onClick={handleMenuToggle} style={buttonStyle}>
                    <UilBars />
                </button>
            </nav>
            <div className='menu'>
                <Menu isOpen={isOpen} width={'100%'} bubble>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/search">Courses</a>
                    <a href="/profile">My Courses</a>
                    <a href="/profile">Profile</a>
                    <a href="/">Log out</a>
                </Menu>
            </div>
        </>
    );
}