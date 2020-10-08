import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.logo}>
            <a href="/">Dublin Apps</a>
            <p>ipad applications</p>
        </div>
    );
}

export default Logo;