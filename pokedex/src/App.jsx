import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonInfo } from "./PokemonInfo";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const fetchedData = [];

      for (let i = 1; i <= 151; i++) {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${i}`;

        // fetch base pokemon
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonData = await pokemonResponse.json();

        // fetch pokemon descriptions
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse.json();

        // combine fetched data into custom object and add to array
        fetchedData.push({
          id: pokemonData.id,
          name: pokemonData.name,
          sprite: pokemonData.sprites.front_default,
          types: pokemonData.types.map((t) => t.type.name),
          flavorText: speciesData.flavor_text_entries[8]["flavor_text"],
        });
      }
      setPokemonList(fetchedData);
    }

    getPokemon();
  }, []);

  const handleShowInfo = (pkmn) => {
    console.log("hello world " + pkmn.name);
    setPokemonInfo(pkmn);
  };

  const handleCloseInfo = () => {
    setPokemonInfo(null);
  };

  const pokemonCards = pokemonList.map((pokemon) => (
    <li key={pokemon.id}>
      <PokemonCard
        pkmn={{
          name: pokemon.name,
          id: pokemon.id,
          sprite: pokemon.sprite,
          desc: pokemon.flavorText,
        }}
        handleShowInfo={handleShowInfo}
      ></PokemonCard>
    </li>
  ));

  return (
    <>
      <header>
        <h1>Pokédex</h1>
      </header>
      {pokemonInfo ? (
        <PokemonInfo pkmn={pokemonInfo} onClose={handleCloseInfo} />
      ) : (
        <div className="wrapper">
          <ul className="container">{pokemonCards}</ul>
        </div>
      )}
    </>
  );
}

export default App;
