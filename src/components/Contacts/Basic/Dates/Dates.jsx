import React from 'react';
import classes from './Dates.module.css';

const Dates = () => {
    return (
        <div className={classes.dates}>
            <input placeholder='Your name' />
            <input placeholder='email adress' />
            <input placeholder='Phone number' />
            <textarea placeholder='Your message' />
            <button>Submit</button>
        </div>
    );
}

export default Dates;