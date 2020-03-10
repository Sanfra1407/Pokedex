import { DocumentNode } from "graphql";
import IPokemon from "../interfaces/IPokemon";

/**
 * @interface IActiveQuery
 * @description Define activeQuery struct
 */
interface IActiveQuery {
  query: DocumentNode;
  variables: object;
  mapper(data: object): IPokemon[];
}

export default IActiveQuery;
