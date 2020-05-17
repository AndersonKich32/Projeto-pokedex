import React from 'react';
import './styles.css'


export default function Status(props){

    return(
        <div className='item-status-container'>
            <div className='item-status-name'>
                <p>{props.name}</p>
            </div>
            <div className='item-status-number'>
                <p>{props.value}</p>
            </div>
        </div>
    )
}