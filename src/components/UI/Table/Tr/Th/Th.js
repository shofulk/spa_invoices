import React from 'react';
import classes from './Th.module.css';

export default (props) => {
    return (<th className={classes.Th}>{props.data}</th>);
}