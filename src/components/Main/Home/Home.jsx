import React, {useState, useContext} from "react";
import ListPokemon from "./ListPokemon";
import Search from "./Search";

const Home = () => {

//  const [pokemonList, setPokemonList] = useState([]); // Para guardar los pokemon 

  const [pokemonToSearch, setPokemonToSearch] = useState(null); //Para almacenar el pokemon a buscar

  return <section>
    <Search setPokemonToSearch={setPokemonToSearch} />
    <ListPokemon pokemonToSearch={pokemonToSearch} />
  </section>;
};

export default Home;
