import React from 'react';
import classes from './Search.module.css';


const Search = () => {
    return (
        <div className={classes.search}>
            <input type = 'text'  placeholder = 'search...' />
        </div>
    );
}

export default Search;