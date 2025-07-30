import "./PokemonInfo.css";

export function PokemonInfo({ pkmn, onClose }) {
  return (
    <>
      <div className="closeBtn" onClick={onClose}>
        X
      </div>
      <div>{pkmn.name}</div>
    </>
  );
}
