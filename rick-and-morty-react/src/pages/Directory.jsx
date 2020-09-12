import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCharacters, getCharacterCount } from "../actions/character";

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
