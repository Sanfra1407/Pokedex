import IActiveQuery from "../interfaces/IActiveQuery";
import pokemonsQuery from "../queries/pokemons";
import pokemonsByTypeQuery from "../queries/pokemonsByType";
import pokemonsMapper from "../mappers/pokemonsMapper";
import pokemonsByTypeMapper from "../mappers/pokemonsByTypeMapper";
import { DATA_SIZE } from "../../../server/data/pokemons";
import FILTER_TYPES from "../enums/filter-types";

/**
 * @const queryHandler
 * @description Utility to get the correct query for fetching Pokemons
 * @param filterType
 * @param query
 *
 * @returns {object}
 */
const queryHandler = (
  filterType: FILTER_TYPES,
  query: string
): IActiveQuery => {
  const activeQuery: IActiveQuery = {
    name: {
      mapper: (results: object) => pokemonsMapper(results),
      query: pokemonsQuery,
      variables: {
        name: query.toLowerCase(),
        limit: DATA_SIZE
      }
    },
    type: {
      mapper: (results: object) => pokemonsByTypeMapper(results),
      query: pokemonsByTypeQuery,
      variables: {
        type: query.toLowerCase(),
        limit: DATA_SIZE
      }
    }
  }[filterType];

  return activeQuery;
};

export default queryHandler;
