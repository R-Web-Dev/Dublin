import React from 'react';
import classes from './Article.module.css';
import Item from './Item/Item';

const Article = () => {
    return (
        <article>
            <Item />
            <Item />
            <Item />
        </article>
    );
}

export default Article;