import React from 'react';
import classes from './Demonstration.module.css';
import Heading from '../Contacts/Heading/Heading';
import { FaRegPlayCircle, FaPlayCircle, FaPauseCircle, FaInfoCircle } from "react-icons/fa";

const Demonstration = (props) => {
    return (
        <div className={classes.demonstration}>
            <Heading />
            <div className={classes.content}>
                <div className={classes.head}>
                    <div className={classes.title}>
                        <h2>There are many variations of passages </h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={classes.head_content}>
                        <figure>
                            <img src="/images/product.png" alt="ipad" />
                        </figure>
                        <div className={classes.head_text}>
                            <ul>
                                <li><i><FaRegPlayCircle /></i><p>Lorem ipsum dolor sit amet consectetur</p></li>
                                <li><i><FaRegPlayCircle /></i><p>At iusto natus unde, aspernatur </p></li>
                                <li><i><FaRegPlayCircle /></i><p>Totam explicabo tenetur ducimus ratione! Tempore</p></li>
                                <li><i><FaRegPlayCircle /></i><p>Amet consectetur adipisicing elit</p></li>
                                <li><i><FaRegPlayCircle /></i><p>Tempore sit amet consectetur</p></li>
                                <li><i><FaRegPlayCircle /></i><p>Lorem ipsum dolor  adipisicing elit</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.play}>
                <div className={classes.play_title}>
                    <h2>There are many variations of passages </h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={classes.options}>
                    <a href="#"><FaPlayCircle /></a>
                    <a href="#"><FaPauseCircle /></a>
                    <a href="#"><FaInfoCircle /></a>
                </div>
                <div className={classes.play_text}>
                    <h2>Play now</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam aliquam dolor perferendis ab voluptate quis id sunt aut, officia inventore suscipit exercitationem veniam qui natus ea quasi molestias, illo doloremque accusamus amet. Quasi ut nihil alias! Nesciunt voluptas hic accusantium facilis cum porro adipisci a consequuntur temporibus amet! Ipsam praesentium et id repudiandae sapiente?</p>
                </div>
                <div className={classes.play_content}>
                    <figure>
                        <img src="/images/p_ipad.png" alt="ipad" />
                    </figure>
                    <div className={classes.list}>
                        <h3>There are many variations of passages</h3>
                        <ul>
                            <li><i><FaRegPlayCircle /></i><p>Lorem ipsum dolor sit amet.</p></li>
                            <li><i><FaRegPlayCircle /></i><p>Debitis temporibus dolor ab autem.</p></li>
                            <li><i><FaRegPlayCircle /></i><p>Ex similique libero unde sequi.</p></li>
                            <li><i><FaRegPlayCircle /></i><p>Sapiente dolorum rerum eligendi nulla.</p></li>
                        </ul>
                        <div className={classes.play_button}>
                        <button>Buy now</button>
                        <button>Download</button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Demonstration;