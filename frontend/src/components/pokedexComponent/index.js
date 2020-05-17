import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
import Card from '../cardComponent';
import Pokebola from '../pokebolaComponent';


export default function Pokedex(){
const [namePokemon, setNamePokemon] = useState('');
const [dataPokemon, setDataPokemon] = useState('');
const [type, setType] = useState([])
const [itemStatus, setItemStatus] = useState([])
const [captur, setCaptur] = useState('')
const [ability, setAbility] = useState('')
const [preview, setPreview] = useState('')
const [idPokemon, setIdPokemon] = useState(0)


const filterType = (type) =>{
    const tipos = type.map(item =>{
        return item.type.name
    })
    setType(tipos)
}

const filterStatus = (status) => {
    const itemStatus = status.map(item =>{
        return {value:item.base_stat, name:item.stat.name}
    })
    setItemStatus(itemStatus)
}

const filterAbility = (ability) => {
    const abilities = ability.map(item =>{
        return item.ability.name
    })
    setAbility(abilities)
}

const setPokedex = () => {
    setCaptur('');
    setPreview('');
}

const seePokemon = () => {
    preview === '' ? setPreview('preview') : setPreview('');
}

const capturPokemon = () => {
    captur === '' ? setCaptur('closePokebola') : setCaptur('');
    seePokemon()
}

const savePokemon = () => {
    setPokedex();
}

async function handleEvolution(e){
    e.preventDefault();
    const data = {idPokemon};
    try{
         const response = await api.post('/buscarEvol', data);
         const evol = response.data;
         if(evol.evolves_from_species !== null){
            setIdPokemon(evol.id +1)
            console.log('id' + idPokemon )
            setDataPokemon(evol)
         filterType(evol.types)
            filterStatus( evol.stats)
            filterAbility(evol.abilities)  
         }
    }catch(err){
        alert(`Este pokemon não possui evolucao`);
    }   
}


async function handleSearch(e){
    e.preventDefault();
    const data = {namePokemon};
   
    try{
         const response = await api.post('/buscar', data);
         const info = response.data;
        setIdPokemon(info.id +1)
        setDataPokemon(info)
        filterType(info.types)
        filterStatus( info.stats)
        filterAbility(info.abilities)
    }catch(err){
        alert(`Nome ou id inválido.`);
    }   
}

return(
    <div className='pokedex-container'>
        <div className={`pokedex`}>
            <div className='avatar' style={{backgroundImage:`url(${dataPokemon.image})`}}/>
            
            <div className='pokebolaPosition'>
                <Pokebola captur={captur}/>
            </div>
            
            <div className={`cardPosition ${preview}`} >
                 <Card data={dataPokemon} tipo={type} status={itemStatus} abilities={ability}/>
            </div>

            <div className={`painel`}>
                <form  onSubmit={handleSearch}>
                    <input 
                        minlength="1" 
                        required
                        value={namePokemon}
                        onChange={(e) => setNamePokemon(e.target.value)}
                        />
                    <button className='button' type='submit' disabled={captur === 'closePokebola'}>Encontrar</button>
                    <button className='button' type='button' disabled={captur === 'closePokebola' || idPokemon === 0} onClick={capturPokemon}>Capturar</button>
                    <button className='button' type='button'  onClick={savePokemon} disabled={captur === ''}>Nova busca</button>
                    <button className='button' type='button' onClick={handleEvolution} disabled={idPokemon === 0}>Evoluir</button>
                </form>
            </div>

            <div className='rectangle-top'></div>
            <div className='rectangle-botton'></div>
        </div>
    </div>
)


}

/*
const [namePokemon, setNamePokemon] = useState('');
const [dataPokemon, setDataPokemon] = useState('');
const [type, setType] = useState([])
const [itemStatus, setItemStatus] = useState([])
const [captur, setCaptur] = useState('')
const [ability, setAbility] = useState('')
const [preview, setPreview] = useState('')
const [idPokemon, setIdPokemon] = useState(0)
const [pokTest, setPokeTest] = useState({})


  

const filterType = (type) =>{
    const tipos = type.map(item =>{
        return item.type.name
    })
    setType(tipos)
}

const filterStatus = (status) => {
    const itemStatus = status.map(item =>{
        return {value:item.base_stat, name:item.stat.name}
    })
    setItemStatus(itemStatus)
}

const filterAbility = (ability) => {
    const abilities = ability.map(item =>{
        return item.ability.name
    })
    setAbility(abilities)
}

const setPokedex = () => {
    setCaptur('');
    setPreview('');
}

const seePokemon = () => {
    preview === '' ? setPreview('preview') : setPreview('');
}

const capturPokemon = () => {
    captur === '' ? setCaptur('closePokebola') : setCaptur('');
    seePokemon()
}

const savePokemon = () => {
    setPokedex();
}

async function handleEvolution(e){
    e.preventDefault();
    const data = {idPokemon};
    try{
         const response = await api.post('/buscarEvol', data);
         const evol = response.data;
         if(evol.evolves_from_species !== null){
            setIdPokemon(evol.id +1)
            console.log('id' + idPokemon )
            setDataPokemon(evol)
            filterType(evol.types)
            filterStatus( evol.stats)
            filterAbility(evol.abilities)  
         }
    }catch(err){
        alert(`Este pokemon não possui evolucao`);
    }   
}




async function handleSearch(e){
    e.preventDefault();
    const data = {namePokemon};
   
    try{
         const response = await api.post('/buscar', data);
         const info = response.data;
        setIdPokemon(info.id +1)
        console.log('id' + idPokemon )
        setDataPokemon(info)
        filterType(info.types)
        filterStatus( info.stats)
        filterAbility(info.abilities)
    }catch(err){
        alert(`Nome ou id inválido.`);
    }   
}

return(
    <div className='pokedex-container'>
        <div className={`pokedex`}>
            <div className='avatar' style={{backgroundImage:`url(${dataPokemon.image})`}}/>
            
            <div className='pokebolaPosition'>
                <Pokebola captur={captur}/>
            </div>
            
            <div className={`cardPosition ${preview}`} >
                 <Card data={dataPokemon} tipo={type} status={itemStatus} abilities={ability}/>
            </div>

            <div className={`painel`}>
                <form  onSubmit={handleSearch}>
                    <input 
                        minlength="1" 
                        required
                        value={namePokemon}
                        onChange={(e) => setNamePokemon(e.target.value)}
                        />
                    <button className='button' type='submit' disabled={captur === 'closePokebola'}>Encontrar</button>
                    <button className='button' type='button' disabled={captur === 'closePokebola' || idPokemon === 0} onClick={capturPokemon}>Capturar</button>
                    <button className='button' type='button'  onClick={savePokemon} disabled={captur === ''}>Nova busca</button>
                    <button className='button' type='button' onClick={handleEvolution} disabled={idPokemon === 0}>Evoluir</button>
                </form>
            </div>

            <div className='rectangle-top'></div>
            <div className='rectangle-botton'></div>
        </div>
    </div>
 */