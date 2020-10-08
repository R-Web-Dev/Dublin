import React from 'react';
import classes from './NewsLetter.module.css'
import Social from './Social/Social';

const NewsLetter = () => {
    return (
        <div className={classes.newsletter}>
            <h3>Newsletter</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typeset- <br />ting industry. Lorem Ipsum has been the industrys</p>
            <form className={classes.left} action="">
                <input type="text" name="textfield" placeholder="enter your email adress" />
                <div className={classes.btn}><button>Subscribe</button></div>
            </form>
            <Social />
        </div>
    )
}

export default NewsLetter;

