import React from 'react';
import classes from './Button.module.css';

export default (props) => {
    return (<button style={props.dopStyle} className={classes.Button} onClick={props.onClick}>{props.text}</button>);
}