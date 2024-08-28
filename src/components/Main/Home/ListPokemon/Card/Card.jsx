import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { Link } from 'react-router-dom';


const pokemonCard = ({
  pokemonName,
  pokemonID,
  img,
  types=[],
  pokemonData
}) => {
  const goodName = pokemonName[0].toUpperCase() + pokemonName.slice(1);
  const type = types[0]?.type?.name || 'unknown';
  const stats = JSON.stringify(pokemonData.stats);
  const height = pokemonData.height;
  const weight = pokemonData.weight;

  return (<Link
    to={`/pokemon/${pokemonID}?name=${goodName}&image=${img}&typeOne=${type}&stats=${stats}&height=${height}&weight=${weight}`}
  >
   <Card shadow="sm" className={`${type} card`} /*isPressable onPress={() => console.log("item pressed")}*/>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="200"
              height="200"
              alt={goodName}
              className="w-full object-cover h-[140px] pokemon-image"
              src={img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between footer-data">
            <b>{goodName}</b>
            <p className="text-default-500">#{pokemonID}</p>
          </CardFooter>
        </Card>
        </Link>
      );
};

export default pokemonCard;


//Versión sin librería
/*import React from "react";

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

export default Card;*/