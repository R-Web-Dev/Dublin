import React from 'react';
import classes from './Home.module.css';
import Slider from './Slider/Slider';
import Vidgets from './Vidgets/Vidgets';
import Article from './Article/Article';
import Flaer from './Flaer/Flaer';

const Home = () => {
    return (
        <div className={classes.Home}>
            <Slider />
            <Vidgets />
            <Article />
            <Flaer />
        </div>
    );
}

export default Home;