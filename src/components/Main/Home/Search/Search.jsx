import React, { useState, useContext } from "react";
import errorImage from '../../../../assets/404pokemon.jpg';
import { PokemonList } from '../../../../context/PokemonList';


const Search = ({ setPokemonToSearch }) => {

  const { pokemonList, updatePokemonList } = useContext(PokemonList);

  const [timer, setTimer] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.pokemon.value;
    if (searchValue === '') {
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
    } else {
      setPokemonToSearch(searchValue);
      e.target.pokemon.value = '';
    }
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.trim();
    if (timer) {
      clearTimeout(timer);
    }

    if (searchValue !== '') {
      setTimer(setTimeout(() => {setPokemonToSearch(searchValue)}
      , 2000))
    }
  };

  return <article className='form-section'>
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="pokemon">Search by pokemon's name:</label>
      <input name="pokemon" id="pokemon" onChange={handleChange} />
      <button>Search</button>
    </form>
  </article>
};

export default Search;
