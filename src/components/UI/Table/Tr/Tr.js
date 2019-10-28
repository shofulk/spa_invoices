import React from 'react';
import Td from './Td/Td';
import Th from './Th/Th';

function renderTd(props){
    let data = [props.date_created, props.number, props.date_supplied, props.comment];

    return data.map((element, index) => {return (<Td data={element} key={index*Math.random()}/>)})
}

export default (props) => {
    return (<tr>
        {!props.headline ? renderTd(props.data) :
                           props.headline.map((element, index) => {return (<Th data={element} key={index*Math.random()}/>)})
        }
        </tr>)
}