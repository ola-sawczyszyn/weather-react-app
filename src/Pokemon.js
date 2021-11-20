import axios from "axios";
import React, { useEffect, useState } from "react";
function hashSeed(seed, max = 1118) {
  seed = seed.toLowerCase();
  let sum = 0;
  for (let index = 0; index < seed.length; index++) {
    sum += seed.charCodeAt(index);
  }
  return (sum % max) + 1;
}

export default function Pokemon(props) {
  let { seed } = props;

  let [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!seed) {
      return;
    }
    let pokemonId = hashSeed(seed);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonId}&limit=1`)
      .then((response) => response.data.results[0].url)
      .then((url) => axios.get(url))
      .then((response) => setPokemon(response.data));
  }, [seed]);

  if (!pokemon) {
    return <> </>;
  }

  let types = pokemon.types.map((element) => element.type.name);

  return (
    <>
      <h3 className="text-center">{pokemon.species.name} </h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
      <ul>
        <li>types: {types.join(", ")}</li>
        <li>weight: {pokemon.weight}lb</li>
      </ul>
    </>
  );
}
