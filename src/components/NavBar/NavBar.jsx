import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {ROUTES} from "../../constants/routes";

const NavBar = () => {
    return (
        <nav className={'header_nav'}>
            <ul>
                <li><Link to={ROUTES.HOME}>Home</Link></li>
                <li><Link to={ROUTES.SELECTED_CITY}>Selected City</Link></li>
                <li><Link to={ROUTES.ABOUT}>About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;