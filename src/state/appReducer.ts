import {LocationPreview} from '../models';
import {AppActionTypes, AppState} from './appActions';

const initialState: AppState = {
  userAllowedToLogin: {
    userName: 'Username',
    password: 'Password',
  },
  loggedIn: false,
  checkedInSpots: [],
};

interface CheckInAction {
  type: string;
  payload?: LocationPreview;
}

export const appReducer = (
  state: AppState = initialState,
  action: CheckInAction,
) => {
  switch (action.type) {
    case AppActionTypes.logIn:
      return {...state, loggedIn: true};
    case AppActionTypes.register:
      return {...state};
    case AppActionTypes.checkInSpot:
      return {
        ...state,
        checkedInSpots: [...state.checkedInSpots, action.payload],
      };
  }
  return state;
};
