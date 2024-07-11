import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Home";
import New from "./New";
import Details from "./Details/Details";


const Main = () => {
  return <><main className="container">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/pokemon/:id' element={<Details />} />
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
    </main>;
    </>
};

export default Main;
