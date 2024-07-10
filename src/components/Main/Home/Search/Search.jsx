import React, { useState } from "react";
import errorImage from '../../../../assets/404pokemon.jpg';


const Search = ({ setPokemonToSearch, setPokemonList }) => {

  const [timer, setTimer] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.pokemon.value;
    if (searchValue === '') {
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
