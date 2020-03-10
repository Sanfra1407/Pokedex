import IPokemon from "../interfaces/IPokemon";

/**
 * @function pokemonsMapper()
 * @description Return an array of pokemon
 * @param results
 *
 * @returns Array<IPokemon>
 */
const pokemonsMapper = (results: any): Array<IPokemon> =>
  results.pokemons.edges.map((pokemon: IPokemon) => pokemon.node);

export default pokemonsMapper;
