import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Pokedex from './components/pokedexComponent'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Pokedex}/>
            </Switch>
        </BrowserRouter>
    )
}