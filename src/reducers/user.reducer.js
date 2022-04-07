import { GET_USER, UPDATE_PROFILE } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_PROFILE:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
}
