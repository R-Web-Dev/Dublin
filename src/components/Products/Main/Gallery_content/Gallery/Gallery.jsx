import React from 'react';
import classes from './Gallery.module.css';
import Item from './Item/Item';

const Gallery = (props) => {

    let itemElements = props.state.itemDate.map(i =><Item id={i.id} />);

    return (
        <div className={classes.gallery}>
            {itemElements}
        </div>
    );

}

export default Gallery;