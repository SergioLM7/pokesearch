import React, {useState } from "react";
import ListPokemon from "./ListPokemon";
import Search from "./Search";

const Home = () => {

  const [pokemonToSearch, setPokemonToSearch] = useState(null); //Para almacenar el pokemon a buscar

  return <section>
    <Search setPokemonToSearch={setPokemonToSearch} />
    <ListPokemon pokemonToSearch={pokemonToSearch} />
  </section>;
};

export default Home;
