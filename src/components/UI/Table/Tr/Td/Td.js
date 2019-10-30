import React from 'react';
import classes from './Td.module.css';

export default (props) => {
    return (<td className={classes.Td}>{props.data}</td>);
}