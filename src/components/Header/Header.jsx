import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <Logo />
            <Navbar />
        </header>
    );
}

export default Header;