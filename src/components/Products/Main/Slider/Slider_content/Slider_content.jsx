import React from 'react';
import classes from './Slider_content.module.css';

const Slider_content = () => {
    return (
        <div className={classes.slider_content}>
            <img src="/images/p_ipad.png" alt="ipad" />
            <div className={classes.description}>
                <h3>Ipad image viewer</h3>
                <p>Lorem ipsum dolor sit</p>
                <button>Read more</button>
            </div>
        </div>
    );
}

export default Slider_content;