import React from 'react';
import classes from './Products.module.css';
import Heading from '../Contacts/Heading/Heading';
import Main from './Main/Main';

const Products = (props) => {
    
    return (
        <div className={classes.products}>
            <Heading />
            <Main itemDate={props.itemDate} sliderDate={props.sliderDate} />
         </ div>   
    );
}

export default Products;