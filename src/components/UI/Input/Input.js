import React from 'react';

export default (props) => {
    let htmlFor = `${props.label}--${Math.random()}`;
    return (
        <div>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input name={htmlFor} type={props.type} onChange={props.onChange} value={props.value} required/>
        </div>
    );
}