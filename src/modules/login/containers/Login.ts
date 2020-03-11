import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../../../state';
import {AppActionTypes} from '../../../state/appActions';
import {IActionProps, IObjectProps, Login} from '../views/Login';

const mapStateToProps = (state: RootState): IObjectProps => ({
  userAllowedToLogIn: state.app.userAllowedToLogin,
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => ({
  onLogInPress: () => dispatch({type: AppActionTypes.logIn}),
  onRegisterPress: () => dispatch({type: AppActionTypes.register}),
});

export const LoginConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
