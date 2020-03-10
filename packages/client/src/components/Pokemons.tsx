import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Table from "antd/lib/table";
import isEmpty from "lodash/isEmpty";
import IPokemon from "../interfaces/IPokemon";

/**
 * @interface Props
 * @description Define component's props
 */
interface Props {
  isLoading: boolean;
  pokemons: IPokemon[];
}

/**
 * @interface State
 * @description Define component's state
 */
interface IPaginationConfig {
  pageSize: number;
  position: "bottom" | "both" | "top" | undefined;
  hideOnSinglePage: boolean;
}

const Pokemons: React.FC<Props> = ({ isLoading, pokemons }) => {
  /**
   * @const _isRenderable
   * @description If it's true it shows the table
   *
   * @returns {boolean}
   */
  const _isRenderable: boolean = !isLoading && !isEmpty(pokemons);

  return (
    <div className="pokedex__pokemon">
      <Row>
        <Col span={12} offset={6}>
          <Table
            rowKey="id"
            loading={isLoading}
            dataSource={!isLoading ? pokemons : []}
            {...(_isRenderable ? tableConfig : {})}
          ></Table>
        </Col>
      </Row>
    </div>
  );
};

/**
 * @const MAX_ITEMS_PER_PAGE
 * @description Limit of maximum pokemon that must be shown in the table
 *
 * @returns {number}
 */
const MAX_ITEMS_PER_PAGE: number = 10;

/**
 * @const paginationConfig
 * @description Object for defining Pagination's props
 *
 * @returns {IPaginationConfig}
 */
const paginationConfig: IPaginationConfig = {
  pageSize: MAX_ITEMS_PER_PAGE,
  position: "bottom",
  hideOnSinglePage: true
};

/**
 * @const tableConfig
 * @description Object for defining Table's config
 *
 * @returns {object}
 */
const tableConfig = Object.freeze({
  columns: [
    {
      title: "ID",
      dataIndex: "id",
      render: (id: string) => <>{id}</>
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string) => <strong>{name}</strong>
    },
    {
      title: "Types",
      dataIndex: "types",
      render: (types: []) => <>{types.join(", ")}</>
    },
    {
      title: "Classification",
      dataIndex: "classification",
      render: (classification: string) => <>{classification}</>
    }
  ],
  pagination: paginationConfig
});

export default Pokemons;
