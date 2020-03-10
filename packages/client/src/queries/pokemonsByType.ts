import { gql } from "apollo-boost";

const pokemonsByTypeQuery = gql`
  query getPokemonsByType($type: String!, $limit: Int!) {
    pokemonsByType(type: $type, limit: $limit) {
      edges {
        node {
          id
          name
          types
          classification
        }
      }
    }
  }
`;

export default pokemonsByTypeQuery;
