import { IS_LOADING_LOGIN_TYPE } from "../actions/types";

const INITIAL_STATE = {
  isLoadingLogin: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING_LOGIN_TYPE:
      return { ...state, action_var: action.payload };
    default:
      return state;
  }
};
