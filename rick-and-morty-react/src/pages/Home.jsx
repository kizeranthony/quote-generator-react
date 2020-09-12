import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getSingleCharacter } from "../actions/character";

const generateCharNum = () => {
  return Math.ceil(Math.random() * 591);
};

const Home = ({ selectedCharacter, error, loading, getSingleCharacter }) => {
  const getRandomCharacter = () => {
    const randomNum = generateCharNum();

    getSingleCharacter(randomNum);
  };
  useEffect(() => {
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
              <div className="btn btn--ghost">Go to Directory</div>
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
};

const mapStateToProps = (state) => ({
  loading: state.character.loading,
  error: state.character.error,
  selectedCharacter: state.character.selectedCharacter,
});

export default connect(mapStateToProps, { getSingleCharacter })(Home);
