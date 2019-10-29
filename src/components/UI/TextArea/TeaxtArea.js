import React from 'react';

export default (props) => {
    let htmlFor = `${props.label}--${Math.random()}`
    return (
        <div>
            <label htmlFor={htmlFor}>{props.label}</label>
            <textarea name={htmlFor} value={props.value} onChange={props.onChange}/>
        </div>
    );
}