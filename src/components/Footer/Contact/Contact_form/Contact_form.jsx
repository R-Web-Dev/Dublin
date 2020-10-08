import React from 'react';
import classes from './Contact_form.module.css';

const Contact_form = () => {
    return (
        <div className={classes.contact_form}>
            <h3>Contact form</h3>
            <div className={classes.align}>
            <form className={classes.left} action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
            <form className={classes.right} action="">
                <textarea name="textarea"></textarea>
            </form>
            </div>
            <div className ={classes.btn}><button>Submit</button></div>

        </div>
    );
}

export default Contact_form;