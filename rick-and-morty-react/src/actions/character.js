import axios from "axios";
import character from "../reducers/character";
import {
  GET_ALL_CHARACTERS,
  GET_SINGLE_CHARACTER,
  GET_CHAR_COUNT,
} from "./types";

const sendError = (error) => (dispatch) => {
  const errors = error.response.data.errors;

  if (errors) {
    errors.forEach((error) => console.log("***Error***:", error.msg));
  }
};

export const getCharacterCount = () => async (dispatch) => {
  const url = `https://rickandmortyapi.com/api/character`;
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_CHAR_COUNT,
      payload: res.data.info.count,
    });
  } catch (error) {
    dispatch(sendError());
  }
};

export const getAllCharacters = (character_count, characters) => async (
  dispatch
) => {
  const charactersPerPage = 20;
  const pageCount = character_count / charactersPerPage;

  for (let page = 1; page <= pageCount; page++) {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    try {
      const res = await axios.get(url);
      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch(sendError(error));
    }
  }
};

export const getSingleCharacter = (characterNumber) => async (dispatch) => {
  const url = `https://rickandmortyapi.com/api/character/${characterNumber}`;

  try {
    const res = await axios.get(url);
    dispatch({ type: GET_SINGLE_CHARACTER, payload: res.data });
  } catch (error) {
    dispatch(sendError(error));
  }
};
