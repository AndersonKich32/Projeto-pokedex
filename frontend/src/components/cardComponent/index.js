import React from 'react';
import './styles.css'
import Type from '../tipoComponent'
import ItemStatus from '../statusComponent'
import Ability from '../abilityComponent'

export default function Card(props){
    const verifycarId = (id) =>{
        let number = id
        if(number < 10){
           number = `00${number}`  
        }
        else if(number < 100){
            number = `0${number}`
        }
       return number;
    }

    const handleType = () => {
         const type = [...props.tipo]
         console.log(props.data)
         return   type.map((item, key) => (
            <Type nome={item} id={key} />
       ))      
    }

    const handleItemStatus = () => {
        const status = [...props.status]
          return  status.map((item, key) =>(
            <ItemStatus value={item.value} name={item.name} id={key}/>
        ))
    }

    const handleAbility = () => {
         const abilities = [...props.abilities]
         return   abilities.map((item, key) => (
            <Ability name={item} id={key}/>
       ))      
    }


    return(
       
        <div className='card-container'>
            <div className='card'>
            <div className='imgBox' >
                <img src={props.data.image} ></img>
            </div>

            <div className='container-type'>
                 {handleType()}
            </div>
                <p className='id'>N: {verifycarId(props.data.id)}</p>
                <p className='xp'>EXP: {verifycarId(props.data.base_experience)}</p>
                <h1 className='name'>{props.data.name}</h1>
                
                <div className='list-status'>
                    {handleItemStatus()}
                </div>

                <div className='ability-container'>
                    <h3>Abilities</h3>
                    <div className='ability-position'>
                        {handleAbility()}
                    </div>

                </div>
            </div>

        </div>
       

    );
};