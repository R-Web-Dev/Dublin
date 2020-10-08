import React from 'react';
import classes from './Info.module.css';
import Adress from './Adress/Adress';
import Map from './Map/Map';

const Info = () => {
    return (
        <div className={classes.info}>
            <Adress />
            <Map />
        </div>
    );
}

export default Info;