import React from 'react';
import classes from './TableSection.module.css';
import Table from '../UI/Table/Table';

export default (props) => {
    return (
        <section>
            <h2>Invoices</h2>
            <Table headline={props.headline} data={props.data} onClickTr={props.onClickTr}/>
        </section>
    );
}