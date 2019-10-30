import React from 'react';
import Td from './Td/Td';
import Th from './Th/Th';
import classes from './Tr.module.css';

function renderTd(props){
    let data = [props.date_created, props.number, props.date_supplied, props.comment];

    return data.map((element, index) => {return (<Td data={element} key={index*Math.random()} />)})
}

export default (props) => {
    console.log(props)
    return (<tr className={classes.Tr} onClick={() => {props.onClickTr(props.data.id)}}>
        {!props.headline ? renderTd(props.data) :
                           props.headline.map((element, index) => {return (<Th data={element} key={index*Math.random()}/>)})
        }
        </tr>)
}