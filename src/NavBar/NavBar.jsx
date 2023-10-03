import React, { useState } from 'react';
import './NavBar.css';
import { slide as Menu } from 'react-burger-menu';
import { UilBars } from '@iconscout/react-unicons';
import { Link } from "react-router-dom";
import DropdownMenu from '../Search/Menu.jsx';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
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
            <h1>Skillverse</h1>
            <div className="header-content">
                <div >Courses</div>
                <input type="search" name="search" id="search" placeholder="Search..." />
                <div >My Courses</div>
                <a href="Search/Menu.jsx">My Courses</a>
                <div>Profile Image</div>
            </div>
        </div>
        
            <nav className="navbar">
                <div className="logo">Skillverse</div>
                <button onClick={handleMenuToggle} style={buttonStyle}>
                    <UilBars />
                </button>
            </nav>
            <Menu isOpen={isOpen} width={'100%'} bubble>
                <a href="/about">Courses</a>
                <a href="/services">My Courses</a>
            </Menu>
        </>
    );
}