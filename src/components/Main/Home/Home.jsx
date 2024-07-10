import React, {useState} from "react";
import ListPokemon from "./ListPokemon";
import Search from "./Search";

const Home = () => {

  const [pokemonList, setPokemonList] = useState([]); // Para guardar los pokemon 
  const [pokemonToSearch, setPokemonToSearch] = useState(null); //Para almacenar el pokemon a buscar

  return <section>
    <Search setPokemonToSearch={setPokemonToSearch} setPokemonList={setPokemonList}/>
    <ListPokemon pokemonToSearch={pokemonToSearch} pokemonList={pokemonList} setPokemonList={setPokemonList}/>
  </section>;
};

export default Home;
