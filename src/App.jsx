import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

//Importamos el contexto (con su variable global)
import { PokemonSearched } from '/src/context/PokemonSearched';


const App = () => {

  const [pokemonSearched, setPokemonSearched] = useState([]); //Para guardar los pokemon buscados 

  const updatePokemonSearched = (newPokemon) => {
    setPokemonSearched(newPokemon);
  }
  const pokemonSearchedData = { pokemonSearched, updatePokemonSearched };

  return (
    <>
      <BrowserRouter>
        <Header />
        <PokemonSearched.Provider value={pokemonSearchedData}>
          <Main />
        </PokemonSearched.Provider>
      </BrowserRouter>
      <Footer />
    </>
  )
};

export default App
