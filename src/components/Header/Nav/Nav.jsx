import React from "react";
import { Link } from "react-router-dom";

//import burgerIcon from "../../../assets/burger-icon.png";


const Nav = () => {

  return (
    <nav className="nav">
      <label htmlFor="menu"></label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/pokemon">PokemonDetail</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Nav;
