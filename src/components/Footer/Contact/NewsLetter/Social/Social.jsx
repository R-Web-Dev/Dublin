import React from 'react';
import classes from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {NavLink} from 'react-router-dom';

const Social = () => {
    return (
        <div className={classes.social}>
            <ul>
                <li><NavLink to='https://twitter.com/'><FontAwesomeIcon icon={faTwitter} /></NavLink></li>
                <li><NavLink to='#'><FontAwesomeIcon icon={faFacebookF} /></NavLink></li>
                <li><NavLink to="/home"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink></li>
            </ul>
            
        </div>
    )
}

export default Social;

