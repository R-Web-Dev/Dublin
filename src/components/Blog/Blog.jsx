import React from 'react';
import classes from './Blog.module.css';
import Blog_main from './Blog_main/Blog_main';
import Pagination from './Pagination/Pagination';
import Heading from '../Contacts/Heading/Heading';

const Blog = (props) => {

    

    let blogElements = props.state.blogDate.map(item =><Blog_main id = {item.id} />);

    return (
        <div className={classes.blog}>
            <Heading />
            {blogElements}
            <Pagination />
            
        </div>
    );
}

export default Blog;