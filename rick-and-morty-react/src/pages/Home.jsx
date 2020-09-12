import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  getSingleCharacter,
  getAllCharacters,
  getCharacterCount,
} from "../actions/character";

const Home = ({
  selectedCharacter,
  character_count,
  error,
  loading,
  getSingleCharacter,
  getAllCharacters,
  getCharacterCount,
}) => {
  const getRandomCharacter = () => {
    const randomNum = generateCharNum();
    getSingleCharacter(randomNum);
  };

  const getCount = async () => {
    getCharacterCount();
  };

  const generateCharNum = () => {
    return Math.ceil(Math.random() * 671);
  };

  useEffect(() => {
    getCount();
    getRandomCharacter();
  }, []);

  return (
    <div className="home container">
      <div className="home__header">
        <h1 className="home__header--main">
          Citadel of Ricks - Shadow Council Training Manual Extension
        </h1>
        <h2 className="home__header--sub">Confidential</h2>
        <small>Only for official Shadow Council business </small>
      </div>
      <div className="home__random-char">
        {loading ? (
          <Loading />
        ) : (
          <div className="char-card">
            <div className="char-card__image">
              <img src={selectedCharacter.image} />
            </div>
            <div className="char-card__info">
              <h3 className="char-card__info--name">
                Name: {selectedCharacter.name}
              </h3>
              <p className="char-card__info--location">
                Last Known Whereabouts:
                {selectedCharacter.location.name}
              </p>
              <p className="char-card__info--status">
                {selectedCharacter.status}
              </p>
            </div>
            <div className="home__random-char__buttons">
              <div
                className="btn btn--white"
                onClick={() => getRandomCharacter()}
              >
                Get Random Character
              </div>
              <Link to="/directory">
                <div className="btn btn--ghost">Go to Directory</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  getSingleCharacter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  getAllCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.character.loading,
  error: state.character.error,
  selectedCharacter: state.character.selectedCharacter,
  characterCount: state.character.character_count,
});

export default connect(mapStateToProps, {
  getSingleCharacter,
  getAllCharacters,
  getCharacterCount,
})(Home);
