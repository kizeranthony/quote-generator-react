import axios from "axios";
import { GET_ALL_CHARACTERS, GET_SINGLE_CHARACTER } from "./types";

const sendError = (error) => (dispatch) => {
  const errors = error.response.data.errors;

  if (errors) {
    errors.forEach((error) => console.log("***Error***:", error.msg));
  }
};

export const getAllCharacters = (page) => async (dispatch) => {
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
