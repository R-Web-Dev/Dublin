import React from 'react';
import classes from './Basic.module.css';
import Dates from './Dates/Dates';
import Info from './Info/Info';

const Basic = () => {
    return (
        <div className={classes.basic}>
            <Dates />
            <Info />
        </div>
    );
}

export default Basic;