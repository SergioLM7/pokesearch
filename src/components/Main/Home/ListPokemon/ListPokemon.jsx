import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import { Vortex } from 'react-loader-spinner';
import errorImage from '../../../../assets/404pokemon.jpg';
import { PokemonSearched } from '../../../../context/PokemonSearched';
import { PokemonList } from '../../../../context/PokemonList';



const ListPokemon = ({ pokemonToSearch }) => {
  
  const { pokemonSearched, updatePokemonSearched } = useContext(PokemonSearched);
  const { pokemonList, updatePokemonList } = useContext(PokemonList);

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
        updatePokemonList(resolvedPokemonData.filter(pokemon => pokemon !== null));
        console.log(pokemonList);
      } catch (e) {
        console.error('Error fetching the list of pokemons', e);
        updatePokemonList([]);
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
        img={item.sprites.other.home.front_default}
        types={item.types}
        pokemonData={item}
      />
    ));

  //Renderizado de los pokemon que están setPokemonSearched 
  /*const renderPokemonSearched = () =>
    pokemonSearched.map((item, i) => (
      <Card
        key={uuidv4()}
        pokemonName={item.name}
        pokemonID={item.id}
        img={item.sprites.other.home.front_default}
        types = {item.types}

      />
    ));*/

  //UseEffect para buscar el pokemon del input
  useEffect(() => {
    if (pokemonToSearch) {

      const pokemonInArray = pokemonSearched.find((input) => input.name === pokemonToSearch);
      console.log(pokemonInArray)

      if (pokemonInArray) {
        updatePokemonList([pokemonInArray])
        const verifyPokemon = pokemonSearched.some(pokemon => pokemon.name === pokemonInArray.name)
        console.log(verifyPokemon);

       /* if (verifyPokemon === false) {
          updatePokemonSearched([...pokemonSearched, pokemonInArray]);
          console.log(pokemonSearched);
        }*/
      } else {
        const searchPokemon = async () => {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`);
            const pokemonData = res.data;
            console.log(pokemonData);
            updatePokemonList([pokemonData]);
            const verifyPokemon = pokemonSearched.some(pokemon => pokemon.name === pokemonData.name)
            console.log(verifyPokemon);

            if (verifyPokemon === false) {
              updatePokemonSearched([...pokemonSearched, pokemonData]);
              console.log(pokemonSearched);
            }

          } catch (e) {
            console.error('Error fetching that pokemon', e);
            updatePokemonList([{
              id: 404,
              name: 'Error 404',
              sprites: {
                other: {
                  home: {
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
    {pokemonList.length != 0 ? renderPokemons() : <Vortex
      visible={true}
      height="200"
      width="200"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['blue', 'yellow', 'red', 'blue', 'yellow', 'red']}
    />}
  </article>;
};

export default ListPokemon;
