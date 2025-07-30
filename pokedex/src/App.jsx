import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const fetchedData = [];

      for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        const data = await response.json();
        fetchedData.push(data);
      }
      setPokemonList(fetchedData);
    }

    getPokemon();
  }, []);

  const pokemonCards = pokemonList.map((pokemon) => (
    <li key={pokemon.id}>
      <PokemonCard
        pkmn={{
          name: pokemon.name,
          id: pokemon.id,
          image: pokemon.sprites["front_default"],
        }}
      ></PokemonCard>
    </li>
  ));

  return (
    <>
      <header>
        <h1>Pokédex</h1>
      </header>
      <div className="wrapper">
        <ul className="container">{pokemonCards}</ul>
      </div>
    </>
  );
}

export default App;
