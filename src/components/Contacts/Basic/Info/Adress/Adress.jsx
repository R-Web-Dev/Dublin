import React from 'react';
import classes from './Adress.module.css';
import Date from './Date/Date';

const Adress = () => {
    return (
        <div className={classes.adress}>
            <h4>Dublin i Pad Applications</h4>
            <Date />
        </div>
    );
}

export default Adress;