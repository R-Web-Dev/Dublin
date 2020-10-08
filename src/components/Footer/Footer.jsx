import React from 'react';
import classes from './Footer.module.css';
import Footer_content from './Footer_content/Footer_content';
import Contact from './Contact/Contact';

const Footer = () => {
    return (
        <footer>
            <Footer_content />
            <Contact />
    </footer>
    );
}

export default Footer;