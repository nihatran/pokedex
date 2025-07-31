import "./PokemonInfo.css";

export function PokemonInfo({ pkmn, onClose }) {
  return (
    <>
      <div className="pkmnInfo">
        <div className="pkmnInfoCard">
          <div className="btnContainer">
            <button onClick={onClose}>X</button>
          </div>
          <img src={pkmn.sprite} alt="pokemon sprite"></img>
          <p className="pkmnTypes">{pkmn.types}</p>
          <p className="pkmnDesc">{pkmn.desc}</p>
        </div>
      </div>
    </>
  );
}
