import React from 'react';
import classes from './Slider.module.css';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Slider_content from './Slider_content/Slider_content';


const Slider = (props) => {

    let sliderElements = props.state.sliderDate.map(item =><Slider_content id = {item.id} />);

    return (
        <div className={classes.slider}> 
            <div className={classes.icon}><NavLink to='/'><FaArrowAltCircleLeft size='2.5vw' /></NavLink></div>
            {sliderElements}
            <div className={classes.icon}><NavLink to="/"><FaArrowAltCircleRight size='2.5vw' /></NavLink></div>
        </div >
    );
}

export default Slider;