import React from 'react';
import classes from './Table.module.css';
import Tr from './Tr/Tr';

export default (props) => {
    console.log(props)
    return (
        <div>
            <table>
                <tbody>
                    <Tr headline={props.headline}/>
                    {props.data.map((element, index) => {return(<Tr data={element} key={index*Math.random()}/>)})}
                </tbody>
            </table>
        </div>
    );
}