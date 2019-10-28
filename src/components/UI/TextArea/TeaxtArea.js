import React from 'react';

export default (props) => {
    return (
        <div>
            <label htmlFor={props.htmlFor}>
                <textarea value={props.value} onChange={props.onChange}/>
            </label>
        </div>
    );
}