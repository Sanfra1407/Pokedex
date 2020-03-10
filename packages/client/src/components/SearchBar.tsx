import React, { useState } from "react";
import Form from "antd/lib/form";
import Select from "antd/lib/select";
import Input from "antd/lib/input";
import QueryButton from "./QueryButton";
import IPokemon from "../interfaces/IPokemon";
import FILTER_TYPES from "../enums/filter-types";

const DEFAULT_FILTER_VALUE: FILTER_TYPES = FILTER_TYPES.name;

/**
 * @interface Props
 * @description Define component's props
 */
interface Props {
  setLoading(isLoading: boolean): void;
  savePokemons(pokemons: IPokemon[]): void;
}

/**
 * @interface State
 * @description Define component's state
 */
interface State {
  query: string;
  filter: FILTER_TYPES;
}

const SearchBar: React.FC<Props> = ({ setLoading, savePokemons }) => {
  const [query, handleQuery] = useState<State["query"]>("");
  const [filter, handleFilter] = useState<State["filter"]>(
    DEFAULT_FILTER_VALUE
  );

  /**
   * @method _getQueryPlaceholderByFilter()
   * @description Method for getting the input placeholder.
   *              It depends on the `state.filter` value
   *
   * @returns {undefined}
   */
  const _getQueryPlaceholderByFilter = (): string => {
    return {
      [FILTER_TYPES.name]: "Insert your Pokémon",
      [FILTER_TYPES.type]: "Insert the type"
    }[filter];
  };

  return (
    <section className="pokedex__search-bar" style={{ textAlign: "center" }}>
      <Form layout="inline">
        <Form.Item>
          <Input
            onChange={e => handleQuery(e.target.value)}
            placeholder={_getQueryPlaceholderByFilter()}
          />
        </Form.Item>
        <Form.Item>
          <Select
            onChange={handleFilter}
            defaultValue={DEFAULT_FILTER_VALUE}
            placeholder="Search Pokémon by"
          >
            <Select.Option value="name">Name</Select.Option>
            <Select.Option value="type">Type</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <QueryButton
            query={query}
            filterType={filter}
            setLoading={setLoading}
            savePokemons={savePokemons}
          />
        </Form.Item>
      </Form>
    </section>
  );
};

export default SearchBar;
