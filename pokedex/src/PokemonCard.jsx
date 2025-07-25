import "./PokemonCard.css";

export function PokemonCard({ pkmn }) {
  return (
    <>
      <div className="pkmnCard">
        <img src={pkmn.image}></img>
        <div>
          <p>#{pkmn.id}</p>
          <p>{pkmn.name}</p>
        </div>
      </div>
    </>
  );
}
