import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';;
import errorImage from '../../../../assets/404pokemon.jpg';

const ListPokemon = ({pokemonToSearch, pokemonList, setPokemonList}) => {
  const [pokemonSearched, setPokemonSearched] = useState([]); //Para guardar los pokemon buscados 

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

  //Renderizado de los pokemon que están pokemonList 
  const renderPokemons = () =>
    pokemonList.map((item, i) => (
      <Card
        key={item.id}
        pokemonName={item.name}
        pokemonID={item.id}
        img={item.sprites.other.dream_world.front_default}
      />
    ));

    //Renderizado de los pokemon que están setPokemonSearched 
  /*const renderPokemonSearched = () =>
    pokemonSearched.map((item, i) => (
      <Card
        key={uuidv4()}
        pokemonName={item.name}
        pokemonID={item.id}
        img={item.sprites.other.dream_world.front_default}
      />
    ));*/

  //UseEffect para buscar el pokemon del input
  useEffect(() => {
    if (pokemonToSearch) {

      const pokemonInArray = pokemonSearched.find((input) => input.name === pokemonToSearch);
      console.log(pokemonInArray)

      if (pokemonInArray) {
        setPokemonList([pokemonInArray])
      } else {
      const searchPokemon = async () => {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`);
          const pokemonData = res.data;
          console.log(pokemonData);
          setPokemonList([pokemonData]);

         if (pokemonSearched.length === 0) {
            setPokemonSearched([pokemonData]);
            console.log(pokemonSearched);

          } else {
            setPokemonSearched([...pokemonSearched, pokemonData]);
            console.log(pokemonSearched);
          }
          
        } catch (e) {
          console.error('Error fetching that pokemon', e);
          setPokemonList([{
            id: 404,
            name: 'Error 404',
            sprites: {
              other: {
                dream_world: {
                  front_default: errorImage
                }
              }
            }
          }]);
        }
      }
      searchPokemon();
    };
  }
  }, [pokemonToSearch]);

  return <article className="pokemon-cards">
      {renderPokemons()}
    </article>;
};

export default ListPokemon;
