import {
  GET_ALL_CHARACTERS,
  GET_SINGLE_CHARACTER,
  GET_CHAR_COUNT,
  LOADING,
} from "../actions/types";

const initialState = {
  loading: true,
  error: {},
  selectedCharacter: {},
  characters: [],
  character_page: 1,
  character_count: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: state.characters.concat(payload),
        loading: false,
      };
    case GET_SINGLE_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload,
        loading: false,
      };
    case GET_CHAR_COUNT:
      return {
        ...state,
        character_count: payload,
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
