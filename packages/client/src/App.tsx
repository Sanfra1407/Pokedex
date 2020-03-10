import React, { useState } from "react";
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";
import SearchBar from "./components/SearchBar";
import CustomDivider from "./components/CustomDivider";
import IPokemon from "./interfaces/IPokemon";

/**
 * @interface Props
 * @description Define component's props
 */
interface Props {}

/**
 * @interface State
 * @description Define component's state
 */
interface State {
  isLoading: boolean;
  pokemons: IPokemon[];
}

const App: React.FC<Props> = () => {
  const [isLoading, setLoading] = useState<State["isLoading"]>(false);
  const [pokemons, savePokemons] = useState<State["pokemons"]>([]);

  return (
    <div className="pokedex">
      <Header />
      <CustomDivider />
      <SearchBar savePokemons={savePokemons} setLoading={setLoading} />
      <CustomDivider />
      <Pokemons isLoading={isLoading} pokemons={pokemons} />
    </div>
  );
};

export default App;
