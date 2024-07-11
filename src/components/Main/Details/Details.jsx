import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useLocation, useParams } from 'react-router-dom';


const Details = () => {


  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const image = queryParams.get('image');
  const typeOne = queryParams.get('typeOne');
  const weight = queryParams.get('weight');
  const height = queryParams.get('height');
  const stats = queryParams.get('stats');
  const statsValues = JSON.parse(stats).map((object) => object.base_stat);
  const statsNames = JSON.parse(stats).map((object) => object.stat.name);
  console.log(statsValues)
  console.log(statsNames)


  // Redireccionar si no hay parámetros requeridos
  if (!name || !image || !typeOne) {
    return <p>Invalid Pokemon details</p>;
  }

  return (<><article className="pokemon-detail">
    <Card shadow="sm" className={`${typeOne} card-detail`} isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="200"
          height="200"
          alt={name}
          className="w-full object-cover h-[140px]"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{name}</b>
        <p className="text-default-500 pokemon-data">#{id}</p>
        <p className="text-default-500 pokemon-data">{height / 10}m</p>
        <p className="text-default-500 pokemon-data">{weight / 10}kg</p>
        <p className="pokemon-data">{statsNames[0]}</p><progress value={statsValues[0]} max={255} />
        <p className="pokemon-data">{statsNames[1]}</p><progress value={statsValues[1]} max={255} />
        <p className="pokemon-data">{statsNames[2]}</p><progress value={statsValues[2]} max={255} />
        <p className="pokemon-data">{statsNames[3]}</p><progress value={statsValues[3]} max={255} />
        <p className="pokemon-data">{statsNames[4]}</p><progress value={statsValues[4]} max={255} />
        <p className="pokemon-data">{statsNames[5]}</p><progress value={statsValues[5]} max={255} />
      </CardFooter>
    </Card>
  </article></>);
};

export default Details;