/**
 * @interface IPokemon
 * @description Define Pokemon struct
 */
interface IPokemon {
  id: string;
  name: string;
  types: string[];
  classification: string;
  node?: object;
}

export default IPokemon;
