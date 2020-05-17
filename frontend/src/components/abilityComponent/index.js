import React from 'react';
import './styles.css'


export default function Ability(props){
   
    return(
        <div className='ability-box'>
            {props.name}
        </div>
    )
}