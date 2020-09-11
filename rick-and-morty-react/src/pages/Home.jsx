import React, { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import axios from "axios";
import { getAllCharacters } from "../actions/character";

const generateCharNum = () => {
  return Math.ceil(Math.random() * 591);
};

const Home = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [state, setState] = useState({
    charNum: generateCharNum(),
    character: {},
    loading: true,
  });

  useEffect(() => {
    getChar();
  }, [state.charNum]);

  const getChar = async () => {
    try {
      const res = await axios.get(`${url}/${state.charNum}`);

      const characterInfo = res.data;

      setState({
        ...state,
        character: characterInfo,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeCharacterNum = () => {
    setState({ ...state, charNum: generateCharNum() });
  };

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
        {state.loading ? (
          <Loading />
        ) : (
          <div className="char-card">
            <div className="char-card__image">
              <img src={state.character.image} />
            </div>
            <div className="char-card__info">
              <h3 className="char-card__info--name">
                Name: {state.character.name}
              </h3>
              <p className="char-card__info--location">
                Last Known Whereabouts:
                {state.character.location.name}
              </p>
              <p className="char-card__info--status">
                {state.character.status}
              </p>
            </div>
            <div className="home__random-char__buttons">
              <div
                className="btn btn--white"
                onClick={() => changeCharacterNum()}
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

export default Home;
