import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/Home" activeClassName={classes.active}>Home</NavLink></li>
                <li><NavLink to="/Demonstration" activeClassName={classes.active}>Demonstration</NavLink></li>
                <li><NavLink to="/Products" activeClassName={classes.active}>Products</NavLink></li>
                <li><NavLink to="/Blog" activeClassName={classes.active}>Blog</NavLink></li>
                <li><NavLink to="/Contacts" activeClassName={classes.active}>Contacts</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
