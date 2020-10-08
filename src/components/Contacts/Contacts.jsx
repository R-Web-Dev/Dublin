import React from 'react';
import classes from './Contacts.module.css';
import Heading from './Heading/Heading';
import Basic from './Basic/Basic';


const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <Heading />
            <Basic />
        </div>
    );
}

export default Contacts;