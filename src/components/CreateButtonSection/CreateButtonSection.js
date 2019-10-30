import React from 'react';
import Button from '../UI/Button/Button';
import classes from './CreateButtonSection.module.css';

export default (props) => {
    return(
        <section className={classes.CreateButtonSection}>
            <h3>Actions</h3>
            <Button onClick={props.onClick} text='Add New'/>
        </section>
    );
}