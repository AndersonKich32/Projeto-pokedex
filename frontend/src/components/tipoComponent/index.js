import React from 'react';
import './styles.css';


export default function Tipos(props){
    const change = (name) => {
        switch (name) {
            case 'bug':
              return('#3c9950');
              break;
            case 'dark':
                return('#595978')
              break;
            case 'dragon':
                return('#62cad9')
              break;
            case 'electric':
                return('#fafa72')
              break;  
            case 'fairy':
                return('#e91368')
              break;  
            case 'fighting':
                return('#ef6239')
              break;  
            case 'fire':
                return('#fd4b5a')
              break;  
            case 'flying':
                return('#94b2c7')
              break;  
            case 'ghost':
                return('#906791')
              break;  
            case 'grass':
                return('#27cb50')
              break;    
            case 'ground':
                return('#a8702d')
              break;  
            case 'ice':
                return('#86d2f5')
              break;  
            case 'normal':
                return('#ca98a6')
              break;  
            case 'poison':
                return('#9b69da')
              break;  
            case 'psychic':
                return('#f71d92')
              break;  
            case 'rock':
                return('#8b3e22')
              break;  
            case 'steel':
                return('#43bd94')
              break;
            case 'water':
                return('#85a8fb')
              break;    
            default:
                return('#fff')
                break;
        }
    }
    return(
        <div className='box-type' style={{background:`${change(props.nome)}`}}>          
            {props.nome}
        </div>
    )
}