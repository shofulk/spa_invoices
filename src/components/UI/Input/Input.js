import React from 'react';
import classes from './Input.module.css';

export default (props) => {
    let htmlFor = `${props.label}--${Math.random()}`;
    return (
        <div className={classes.Div} style={props.dopStyle}>
            <label className={classes.Label} htmlFor={htmlFor}>{props.label}</label><br/>
            <input className={classes.Input} name={htmlFor} type={props.type} onChange={props.onChange} value={props.value} required/>
        </div>
    );
}