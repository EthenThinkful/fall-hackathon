import React, { useState } from 'react';
import './NavBar.css';
import { slide as Menu } from 'react-burger-menu';
import { UilBars } from '@iconscout/react-unicons';
import { useNavigate, Link } from "react-router-dom";
import DropdownMenu from '../Search/Search.jsx';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
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
                <Link to={'/'} className='link'><h1 style={{ margin: 0 }}>Skillverse</h1></Link>
                <div >Courses</div>
                <form onSubmit={handleSubmit}><input type="search" name="search" id="search" placeholder="Type & press enter to go to /search page" className='input' /></form>
                <div >My Courses</div>
                <Link to={'/profile'} className='link'><div>Click me to go to your profile</div></Link>
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