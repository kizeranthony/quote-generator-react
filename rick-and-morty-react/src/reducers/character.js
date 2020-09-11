import { GET_ALL_CHARACTERS, GET_SINGLE_CHARACTER } from "../actions/types";

const initialState = {
  loading: true,
  error: {},
  character_page: 1,
  character_num: 1,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        character_page: payload,
      };
    case GET_SINGLE_CHARACTER:
      return {
        ...state,
        character_num: payload,
      };
    default:
      return state;
  }
}
