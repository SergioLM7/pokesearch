import React, {useRef, useContext} from "react";
import { useForm } from "react-hook-form"
import { PokemonSearched } from '../../../context/PokemonSearched';


const New = () => {

  const formRef = useRef();
  const { pokemonSearched, updatePokemonSearched } = useContext(PokemonSearched);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  // your form submit function which will invoke after successful validation
  const onSubmit = ({id, img, name, typeOne, typeTwo}) => {
  const newPokemon = {
      id: id,
      name: name,
      sprites: {
        other: {
          home: {
            front_default: img
          }
        }
      },
      types:[{type:{name:typeOne}},{type:{name:typeTwo}}]
    }
    console.log(newPokemon)
    updatePokemonSearched([...pokemonSearched, newPokemon]);
    console.log(pokemonSearched)
    formRef.current.reset();
  };
  
  console.log(watch("typeOne")); // you can watch individual input by pass the name of the input

   // Watch the values of typeOne and typeTwo
   const typeOne = watch("typeOne");
   const typeTwo = watch("typeTwo");

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
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
      <label>Image</label>a
      <input {...register("img", { required: true, pattern: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i })} />
      {errors?.img?.type === "required" && <p>This field is required</p>}
      {errors?.img?.type === "pattern" && (
        <p>Image must be a valid url. </p>
      )}
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
  );
};

export default New;