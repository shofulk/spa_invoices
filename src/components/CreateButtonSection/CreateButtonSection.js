import React from 'react';
import Button from '../UI/Button/Button';

export default (props) => {
    return(
        <section>
            <Button onClick={props.onClick} text='Add New'/>
        </section>
    );
}