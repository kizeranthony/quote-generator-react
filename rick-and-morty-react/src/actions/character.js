import axios from "axios";
import {
  GET_ALL_CHARACTERS,
  GET_SINGLE_CHARACTER,
  GENERATE_RANDOM_CHARACTER_NUMBER,
} from "./types";

const sendError = (error) => (dispatch) => {
  const errors = error.response.data.errors;

  if (errors) {
    errors.forEach((error) => console.log("***Error***:", error.msg));
  }
};

export const getAllCharacters = (page = 1) => async (dispatch) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(sendError(error));
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
