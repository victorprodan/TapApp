import {Action} from 'redux';
import {AppActionTypes, AppState} from './appActions';

const initialState: AppState = {
  userAllowedToLogin: {
    userName: 'Username',
    password: 'Password',
  },
  loggedIn: false,
};

export const appReducer = (
  state: AppState = initialState,
  action: Action<any>,
) => {
  switch (action.type) {
    case AppActionTypes.logIn:
      return {...state, loggedIn: true};
    case AppActionTypes.register:
      return {...state};
  }
  return state;
};
