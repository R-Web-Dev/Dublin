import React from 'react';
import classes from './Heading.module.css';
import Title from './Title/Title';
import Search from './Search/Search';

const Heading = () => {
    return (
        <div className={classes.heading}>
            <Title />
            <Search />
        </div>
    );
}

export default Heading;