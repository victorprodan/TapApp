import {IUserAllowedToLogin} from '../models';

export interface AppState {
  userAllowedToLogin: IUserAllowedToLogin;
  loggedIn: boolean;
}

export enum AppActionTypes {
  logIn = 'LOG_IN',
  register = 'REGISTER',
}
