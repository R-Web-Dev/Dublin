import React from 'react';
import classes from './Contact.module.css';
import NewsLetter from './NewsLetter/NewsLetter';
import Contact_form from './Contact_form/Contact_form';

const Contact = () => {
    return (
        <div className={classes.contact}>
            <NewsLetter />
            <Contact_form />
        </div>
    )
}

export default Contact;