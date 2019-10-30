import React from 'react';
import classes from './TextArea.module.css';

export default (props) => {
    let htmlFor = `${props.label}--${Math.random()}`
    return (
        <div>
            <label className={classes.Label} htmlFor={htmlFor}>{props.label}</label><br/>
            <textarea className={classes.TextArea} name={htmlFor} value={props.value} onChange={props.onChange}/>
        </div>
    );
}