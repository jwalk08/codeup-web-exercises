import {getPokemon, getPokemonAll} from './pokemon-api.js';


//Main
(async () => {
    const list = await getPokemonAll();
    console.log(list);
    // });
})();

