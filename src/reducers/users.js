import {
  SAVE_USERS,
  SAVE_LOGIN,
  SAVE_TOKEN,
  SET_USER,
  IS_LOGGED,
  INSERT_SUBSCRIBE,
  SAVE_FAVORITES,
  ADD_FAVORITE,
  ADD_UPDATE,
} from 'src/actions/users';

const initialState = {
  users: [],
  loginValue: [],
  token: {},
  isLogged: false,
  currentUser: [],
  subArray: {},
  favorites: [],
  addFav: {},
  updateValue: {},
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SAVE_LOGIN:
      return {
        ...state,
        loginValue: action.loginValue,
      };

    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
        isLogged: true,
      };

    case SET_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };

    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.value,
      };

    case INSERT_SUBSCRIBE:
      return {
        ...state,
        subArray: action.subArray,
      };

    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        addFav: action.addFav,
      };

    case ADD_UPDATE:
      return {
        ...state,
        updateValue: action.updateValue,
      };

    default: return state;
  }
};

export default users;
