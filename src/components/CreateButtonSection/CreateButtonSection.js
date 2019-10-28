import React from 'react';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';

export default (props) => {
    return(
        <section>
            <Button><Link to={'/create'}>Add New</Link></Button>
        </section>
    );
}