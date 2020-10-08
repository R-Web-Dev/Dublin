import React from 'react';
import classes from './Slider.module.css';
import Text from './Text/Text';
import Ipad from './Ipad/Ipad';

const Slider = () => {
    return (
        <div className={classes.slider}>
            <Text />
            <Ipad />
        </div>
    )
}

export default Slider;