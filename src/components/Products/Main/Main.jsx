import React from 'react';
import classes from './Main.module.css';
import Slider from './Slider/Slider';
import Gallery_content from './Gallery_content/Gallery_content';

const Main = (props) => {
    return (
        <div className={classes.main}>
            
            <Slider sliderDate={props.state.sliderDate} />
            <Gallery_content itemDate={props.state.itemDate} />
        </div>
    );
}

export default Main;