import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <p>Hola</p>
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
