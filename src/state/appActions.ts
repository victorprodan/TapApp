import {IUserAllowedToLogin, LocationPreview} from '../models';

export interface AppState {
  userAllowedToLogin: IUserAllowedToLogin;
  loggedIn: boolean;
  checkedInSpots: LocationPreview[];
}

export enum AppActionTypes {
  logIn = 'LOG_IN',
  register = 'REGISTER',
  checkInSpot = 'CHECK_IN_SPOT',
}
