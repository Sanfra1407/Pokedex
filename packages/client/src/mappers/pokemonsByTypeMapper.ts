import IPokemon from "../interfaces/IPokemon";

/**
 * @function pokemonsByTypeMapper()
 * @description Return an array of pokemon
 * @param results
 *
 * @returns Array<IPokemon>
 */
const pokemonsByTypeMapper = (results: any): Array<IPokemon> =>
  results.pokemonsByType.edges.map((pokemon: IPokemon) => pokemon.node);

export default pokemonsByTypeMapper;
