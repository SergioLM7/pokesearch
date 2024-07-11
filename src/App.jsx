import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import '/src/fonts/SugarBomb-EapEW.ttf'


//Importamos el contexto (con su variable global)
import { PokemonSearched } from '/src/context/PokemonSearched';
import { PokemonList } from '/src/context/PokemonList';


const App = () => {

  const [pokemonList, setPokemonList] = useState([]); // Para guardar los pokemon 
  const [pokemonSearched, setPokemonSearched] = useState([]); //Para guardar los pokemon buscados 

  const updatePokemonSearched = (newPokemon) => {
    setPokemonSearched(newPokemon);
  };

  const updatePokemonList = (newPokemon) => {
    setPokemonList(newPokemon);
  };

  const pokemonSearchedData = { pokemonSearched, updatePokemonSearched };
  const pokemonListData = { pokemonList, updatePokemonList };


  return (
    <>
      <BrowserRouter>
        <Header />
        <PokemonList.Provider value={pokemonListData}>
          <PokemonSearched.Provider value={pokemonSearchedData}>
            <Main />
          </PokemonSearched.Provider>
        </PokemonList.Provider>
      </BrowserRouter>
      <Footer />
    </>
  )
};

export default App
