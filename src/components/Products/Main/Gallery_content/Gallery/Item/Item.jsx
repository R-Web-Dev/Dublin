import React from 'react';
import classes from './Item.module.css';

const Item = () => {
    return (
        <div className={classes.item}>
            <figure>
                <img src="/images/product_ipad.png" alt="ipad" />
            </figure>
            <div className={classes.text}>
                <h3>Iphone apps</h3>
                <p>Lorem ipsum dolor</p>
                <button>Read more</button>
            </div>
        </div>
    );
}

export default Item;