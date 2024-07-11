import React, {useRef, useContext} from "react";
import { useForm } from "react-hook-form"
import { PokemonSearched } from '../../../context/PokemonSearched';
import { PokemonList } from '../../../context/PokemonList';
import { v4 as uuidv4 } from 'uuid';
import Card from '../Home/ListPokemon/Card';
import { Link } from 'react-router-dom';



const New = () => {

  const formRef = useRef();
  const { pokemonSearched, updatePokemonSearched } = useContext(PokemonSearched);
  const { pokemonList, updatePokemonList } = useContext(PokemonList);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  // your form submit function which will invoke after successful validation
  const onSubmit = ({id, img, name, weight, height, typeOne, typeTwo}) => {
  const newPokemon = {
      id: id,
      name: name,
      weight: weight,
      height: height,
      sprites: {
        other: {
          home: {
            front_default: img
          }
        }
      },
      stats: [{
    base_stat: 58,
    effort: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/"
    }
  },
  {
    base_stat: 64,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/"
    }
  },
  {
    base_stat: 58,
    effort: 0,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/"
    }
  },
  {
    base_stat: 80,
    effort: 1,
    stat: {
      name: "special-attack",
      url: "https://pokeapi.co/api/v2/stat/4/"
    }
  },
  {
    base_stat: 65,
    effort: 0,
    stat: {
      name: "special-defense",
      url: "https://pokeapi.co/api/v2/stat/5/"
    }
  },
  {
    base_stat: 80,
    effort: 1,
    stat: {
      name: "speed",
      url: "https://pokeapi.co/api/v2/stat/6/"
    }
  }],
      types:[{type:{name:typeOne}},{type:{name:typeTwo}}]
    }
    console.log(newPokemon)
    updatePokemonSearched([...pokemonSearched, newPokemon]);
    console.log(pokemonSearched)
    updatePokemonList(pokemonSearched)
    formRef.current.reset();
  };
  
  console.log(watch("typeOne")); // you can watch individual input by pass the name of the input

   // Watch the values of typeOne and typeTwo
   const typeOne = watch("typeOne");
   const typeTwo = watch("typeTwo");

    //Renderizado de los pokemon que están setPokemonSearched 
  const renderPokemonSearched = () =>
    pokemonSearched.map((item, i) => (
      <Card
        key={uuidv4()}
        pokemonName={item.name}
        pokemonID={item.id}
        img={item.sprites.other.home.front_default}
        types = {item.types}
        pokemonData={item}
      />
    ));

  return (<>
    <Link to={`/`}><button>Back Home</button></Link>
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className="form">
      <label>ID</label>
      <input {...register("id", { min: 1303, required: true})} />
      {errors?.id?.type === "required" && <p>This field is required</p>}
      {errors.id && (
        <p>Pokemon ID must be greater than 1302</p>
      )}
      <label>Name</label>
      <input {...register("name", { required: true, minLegth: 3,
          maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
      {errors?.name?.type === "required" && <p>This field is required</p>}
      {errors?.name?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      {errors?.name?.type === "maxLength" && (
        <p>Pokemon name cannot exceed 20 characters</p>
      )}
      {errors?.name?.type === "minLength" && (
        <p>Pokemon name cannot be less than 3 characters</p>
      )}
      <label>Weight(kg)</label>
      <input {...register("weight", { min: 1, required: true})} />
      {errors?.weight?.type === "required" && <p>This field is required</p>}
      {errors.id && (
        <p>Pokemon weight must be greater than 1kg</p>
      )}
      <label>Height(m)</label>
      <input {...register("height", { required: true})} />
      {errors?.height?.type === "required" && <p>This field is required</p>}
      <label>Image</label>
      <input {...register("img", { required: true, pattern: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i })} />
      {errors?.img?.type === "required" && <p>This field is required</p>}
      {errors?.img?.type === "pattern" && (
        <p>Image must be a valid url. </p>
      )}
      <label>Type one</label>
      <select {...register("typeOne", { required: true})}>
        <option value="">--Selecciona--</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="electric">Electric</option>
        <option value="grass">Grass</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
      {errors?.typeOne?.type === "required" && <p>This field is required</p>}
      <label>Type two</label>
      <select {...register("typeTwo")}>
        <option value="">--Selecciona--</option>
        <option value={null}></option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="electric">Electric</option>
        <option value="grass">Grass</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
      {typeOne && typeTwo && typeOne === typeTwo && <p>Both types must not be the same</p>}

      <input type="submit" />
    </form>
    <section className="pokemons-searched">
    {renderPokemonSearched()}
    </section>
    </>
  );
};

export default New;