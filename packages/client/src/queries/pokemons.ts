import { gql } from "apollo-boost";

const pokemonsQuery = gql`
  query getPokemons($name: String!, $limit: Int!) {
    pokemons(q: $name, limit: $limit) {
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

export default pokemonsQuery;
