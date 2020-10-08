import React from 'react';
import classes from './Blog_main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Blog_main = () => {
    return (
        <main className={classes.blog_main}>
            <div className={classes.blog_item}>
                <figure><img src="./images/blog.png" alt="blog" /></figure>
                <div className={classes.blog_content}>
                    <div className={classes.blog_header}>
                        <h3>Dublin’s iphone apps Online Demo</h3>
                        <p>29 / may / 2011      written by : Anonimas</p>
                    </div>
                    <div className={classes.blog_text}>
                        <p>Lorem ipsum dolor sit amet, consectetuadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aluip ex ea commodo consequat. Duis aute irure </p>
                    </div>
                    <div className={classes.blog_link}>
                        <div className={classes.blog_social}>
                            <div className={classes.link}><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></div>
                            <div className={classes.link}><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></div>
                        </div>
                        <div className={classes.item_btn}>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Blog_main;