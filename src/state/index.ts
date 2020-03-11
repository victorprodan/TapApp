import {AppState} from './appActions';
import {appReducer} from './appReducer';

export interface RootState {
  app: AppState;
}

export const reducers = {
  app: appReducer,
};
