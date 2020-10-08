import React from 'react';
import classes from './Text.module.css';

const Text = () => {
    return (
        <div className={classes.text}>
            <h1>Dublin&#39;s</h1>
            <h2><span>iPad</span> apps</h2>
            <p>Free and paid apps <br />
                        for you iPad</p>
            <a href="#">Read More</a>
            <div className={classes.shadow}></div>
        </div>
    )
}

export default Text;