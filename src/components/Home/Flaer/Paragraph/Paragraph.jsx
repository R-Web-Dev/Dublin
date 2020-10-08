import React from 'react';
import classes from './Paragraph.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Paragraph = () => {
    return (
        <div className={classes.paragraph}>
            <hr />
            <p><FontAwesomeIcon icon={faPlusCircle} />&emsp;Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry's standard</p>
            <p><FontAwesomeIcon icon={faPlusCircle} />&emsp;Dummy text ever since the 1500s, when an unknown printer Took a galley of type and scrambled it to make a type specimen book.</p>
            <p><FontAwesomeIcon icon={faPlusCircle} />&emsp;It has survived not only five centuries, but also the</p>
            <p><FontAwesomeIcon icon={faPlusCircle} />&emsp;Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry's stand</p>
            <p><FontAwesomeIcon icon={faPlusCircle} />&emsp;Dummy text ever since the 1500s, when an unknown printer Took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
    );
}

export default Paragraph;