import React from 'react';
import classes from './Vidgets.module.css';
import Vidget from './Vidget/Vidget';

const Vidgets = () => {
    return (
        <div className={classes.vidgets}>
           <Vidget />
           <Vidget />
           <Vidget />
           <Vidget />
        </div>
    );
}

export default Vidgets;