import React from 'react';
import classes from './Item.module.css';

const Item = () => {
    return (
        <div className={classes.article}>
            <img src="/images/icon1.png" alt="icon" />
            <h3>Discover Apps</h3>
            <span>Lorem ipsum dolor sit amet.</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
        </div>
    );
}

export default Item;