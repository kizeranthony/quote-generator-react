import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCharacters, getCharacterCount } from "../actions/character";

import CardContainer from "../components/Cards/CardsContainer";
import CharacterCard from "../components/Cards/CharacterCard";

const Directory = ({
  loading,
  characters,
  getAllCharacters,
  getCharacterCount,
  characterCount,
}) => {
  useEffect(() => {
    getCharacterCount();
  }, []);

  return (
    <div>
      directory
      <div onClick={() => getAllCharacters(characterCount)}>
        View Characters
      </div>
      <CardContainer>
        {characters.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </CardContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.character.loading,
  characters: state.character.characters,
  characterCount: state.character.character_count,
});
export default connect(mapStateToProps, {
  getAllCharacters,
  getCharacterCount,
})(Directory);
