import "./PokemonCard.css";

export function PokemonCard({ pkmn, handleShowInfo }) {
  return (
    <>
      <div className="pkmnCard" onClick={() => handleShowInfo(pkmn)}>
        <img src={pkmn.sprite}></img>
        <div>
          <p>#{pkmn.id}</p>
          <p>{pkmn.name}</p>
        </div>
      </div>
    </>
  );
}
