import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className={'header_nav'}>
            <ul>
                <li>Home</li>
                <li>Selected City</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

export default NavBar;