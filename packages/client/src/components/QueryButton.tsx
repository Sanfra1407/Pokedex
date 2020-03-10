import React from "react";
import Button from "antd/lib/button";
import isEmpty from "lodash/isEmpty";
import { withApollo } from "react-apollo";
import queryHandler from "../queries/queryHandler";
import IPokemon from "../interfaces/IPokemon";
import FILTER_TYPES from "../enums/filter-types";

/**
 * @const _isButtonDisabled
 * @description Enable/Disable the button.
 *              If `value` is true the button is disabled.
 * @param value
 *
 * @returns {boolean}
 */
const _isButtonDisabled = (value: string): boolean => isEmpty(value);

/**
 * @interface Props
 * @description Define component's props
 */
interface Props {
  client: any;
  query: string;
  filterType: FILTER_TYPES;
  setLoading(isLoading: boolean): void;
  savePokemons(pokemons: IPokemon[]): void;
}

const QueryButton: React.FC<Props> = ({
  client,
  query,
  filterType,
  savePokemons,
  setLoading
}) => {
  /**
   * @function _executeQuery()
   * @description This function fetch the pokemons from the server.

   * @returns {undefined}
   */
  function _executeQuery(): void {
    /**
     * @description It returns an object which describes:
     *               - the mapper for remapping the results;
     *               - the query to be executed
     *               - the variables to pass to the query
     * @returns {object}
     */
    const QueryHandler = queryHandler(filterType, query);

    // Set `isLoading` true to turn on the loading spinner in Pokemons.tsx
    setLoading(true);

    return client
      .query({
        query: QueryHandler.query,
        variables: QueryHandler.variables
      })
      .then(({ data }: { data: object }) => {
        const pokemons = QueryHandler.mapper(data);
        savePokemons(pokemons);

        return pokemons;
      })
      .finally(() => {
        // Set `isLoading` false to turn off the loading spinner in Pokemons.tsx
        setLoading(false);
      });
  }

  return (
    <Button
      onClick={_executeQuery}
      disabled={_isButtonDisabled(query)}
      type="primary"
      htmlType="button"
    >
      Search
    </Button>
  );
};

export default withApollo<Props>(QueryButton);
