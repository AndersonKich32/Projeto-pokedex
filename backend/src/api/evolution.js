const request = require('request');

module.exports = {

    async indexEvolution(req, res){
        try{
        const {idPokemon} = req.body;
         const hostname = "https://pokeapi.co/api/v2/pokemon-species";
         await  request(`${hostname}/${idPokemon}`, (error, response, body) => {
                const pokemon = JSON.parse(body);
                if(pokemon.evolves_from_species !== null){
                    request(`http://pokeapi.co/api/v2/pokemon/${idPokemon}`, (error, response, body) => {
                        const evolutions = JSON.parse(body)
                        const image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
                        const evolution = {...evolutions, image}
                        return res.json(evolution)
                    })
                }else{
                    return res.status(400).send('Não há evolucoes')
                }
              
            });  
        }
        catch(error){
            return res.status(500).send(error)
        }
    }







}