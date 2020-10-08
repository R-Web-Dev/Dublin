import React from 'react';
import classes from './Footer_content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer_content = () => {
    return (
        <div className="footer_content">
            
                <div className={classes.twitter}><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></div>
                <div className={classes.footer_text}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br /> dummy text  of the printing and typesetting industry.</p></div>
                <div className={classes.footnote}><span>&ndash;versions of lorem ipsum</span></div>
        </div>
    );
}

export default Footer_content;