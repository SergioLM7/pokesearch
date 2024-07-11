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

import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const pokemonCard = ({
  pokemonName,
  pokemonID,
  img
}) => {
  const goodName = pokemonName[0].toUpperCase() + pokemonName.slice(1);

  return (
   <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="200"
              height="200"
              alt={goodName}
              className="w-full object-cover h-[140px]"
              src={img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{goodName}</b>
            <p className="text-default-500">#{pokemonID}</p>
          </CardFooter>
        </Card>
      );
};

export default pokemonCard;