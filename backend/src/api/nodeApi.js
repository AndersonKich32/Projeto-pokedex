
const request = require('request');


module.exports={

   async index(req, res){
    
    const {namePokemon} = req.body;
     const hostname = "http://pokeapi.co/api/v2/pokemon";
     await  request(`${hostname}/${namePokemon}`, (error, response, body) => {
        try{
            const pokedex = JSON.parse(body);
            const image = `https://pokeres.bastionbot.org/images/pokemon/${pokedex.id}.png`
            const pokemon = {...pokedex, image}
            return res.json(pokemon)
        }
        catch(error){
            return res.status(400)
        }
        
    });  
    
}

}