import React from 'react';
import classes from './HeadLine.module.css';

export default (props) => {
    return (
        <header className={classes.HeadLine}>
            <h1>{props.headline}</h1>
        </header>
    );
}