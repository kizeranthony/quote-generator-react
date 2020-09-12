import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt=""/>
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
};

export default CharacterCard;
