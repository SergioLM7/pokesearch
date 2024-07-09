import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card'

const ListPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]); // Para guardar los pokemon 
  const [pokemonToSearch, setPokemonToSearch] = useState(null); //Para almacenar el pokemon a buscar

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        const allPokemoms = res.data.results;

        //Obtengo la URL de cada pokemon
        const pokemonsURL = await allPokemoms.map(data => data.url);

        //Lista de promesas para cada búsuqeda de los datos de cada pokemon 
        const pokemonData = pokemonsURL.map(async (url) => {
          try {
            const res = await axios.get(url);
            const pokemonAllData = res.data;
            return pokemonAllData;
          } catch (e) {
            console.error(`Error fetching data from ${url}`, e);
            return null;
          }
        });

        //Espero a que todas las promesas se resuelvan
        const resolvedPokemonData = await Promise.all(pokemonData);

        //Filtro los null del segundo fetch
        setPokemonList(resolvedPokemonData.filter(pokemon => pokemon !== null));
        console.log(pokemonList);
      } catch (e) {
        console.error('Error fetching the list of pokemons', e);
        setPokemonList([]);
      }
    };
    fetchPokemon();
  }, []);

  const renderPokemons = () =>
    pokemonList.map((item, i) => (
      <Card
        key={i}
        pokemonName={item.name}
        pokemonID={item.id}
        img={item.sprites.other.dream_world.front_default}
      />
    ));

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.pokemon.value.trim();
    if (searchValue) {
      setPokemonToSearch(searchValue);
    }
    e.target.pokemon.value = '';
  };

  //UseEffect para buscar el pokemon del input
  useEffect(() => {
    if (pokemonToSearch) {
      const searchPokemon = async () => {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`);
          const pokemonData = res.data;
          console.log(pokemonData);
          setPokemonList([pokemonData]);
        } catch (e) {
          console.error('Error fetching that pokemon', e);
          setPokemonList([]);
        }
      }
      searchPokemon();
    };
  }, [pokemonToSearch]);

  return <section className="pokemon-list">
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="pokemon">Search by pokemon's name:</label>
      <input name="pokemon" id="pokemon" />
    </form>
    <h2>All Pokemons</h2>
    <section className="pokemon-cards">
      {renderPokemons()}
    </section>
  </section>;
};

export default ListPokemon;
