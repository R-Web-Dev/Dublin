import React from 'react';
import classes from './Flaer.module.css';

import Prod from './Prod/Prod';
import Paragraph from './Paragraph/Paragraph';

const Flaer = () => {
    return (
        <div>
        <div className={classes.flaer}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem <span>Ipsum has been the industry's</span> standard dummy text </p>
        </div>
       <Prod />
       <Paragraph />
        </div>
    );
}

export default Flaer;