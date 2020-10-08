import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './Prod.module.css';


const Prod = () => {
    return (
        <div className={classes.prod}>
        <h3>There are many variations of passages </h3>
        <span>Lorem Ipsum is simply dummy</span>
        <img src="images/product.png" alt="" />
        <div className={classes.col_right}>
            <p><FontAwesomeIcon icon={faPlayCircle} />&emsp;Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <p><FontAwesomeIcon icon={faPlayCircle} />&emsp;Industry. Lorem Ipsum has been the industry's standard</p>
            <p><FontAwesomeIcon icon={faPlayCircle} />&emsp;Dummy text ever since the 1500s, when an unknown printer</p>
            <p><FontAwesomeIcon icon={faPlayCircle} />&emsp;Took a galley of type and scrambled it to make a type specimen book.</p>
            <p><FontAwesomeIcon icon={faPlayCircle} />&emsp;It has survived not only five centuries, but also the</p>
            <a href="#">Read More</a>
            <a href="#">Download</a>
        </div>
    </div>
    );
}

export default Prod;