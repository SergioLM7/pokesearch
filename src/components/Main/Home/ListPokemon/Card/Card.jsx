import React from "react";

const Card = ({
  pokemonName,
  pokemonID,
  img
}) => {
  const goodName = pokemonName[0].toUpperCase() + pokemonName.slice(1);

  return <article className="card" id={pokemonName}>
    <h3>Name: {goodName}</h3>
    <p>ID: #{pokemonID}</p>
    <img src={img} alt={pokemonName} className="picture_item" />
  </article>
};

export default Card;
