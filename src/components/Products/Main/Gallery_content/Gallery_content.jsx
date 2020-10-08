import React from 'react';
import classes from './Gallery_content.module.css';
import Gallery from './Gallery/Gallery';

const Gallery_content = (props) => {

    
    return (
        <div className={classes.gallery_content}>
                <div className={classes.links}>
                    <button className={classes.btn_left}>Most popular</button>
                    <button className={classes.btn_right}>Recent</button>
                    
                </div>
                <Gallery itemDate={props.state.itemDate}/>
            </div>
    );
}

export default Gallery_content;