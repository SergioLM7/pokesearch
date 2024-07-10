import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Home";
import New from "./New";



const Main = () => {
  return <main>
    <p>Esto es el MAIN</p>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
    </main>;
};

export default Main;
