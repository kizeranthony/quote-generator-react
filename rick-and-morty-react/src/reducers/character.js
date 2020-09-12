import {
  GET_ALL_CHARACTERS,
  GET_SINGLE_CHARACTER,
  LOADING,
} from "../actions/types";

const initialState = {
  loading: true,
  error: {},
  selectedCharacter: {},
  characters: [],
  character_page: 1,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        character_page: payload,
        loading: false,
      };
    case GET_SINGLE_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
