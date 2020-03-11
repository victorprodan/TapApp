import {StyleSheet} from 'react-native';
import {theme} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    backgroundColor: theme.colors.white,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  loginButtonContainer: {
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: theme.colors.green,
    paddingHorizontal: 40,
    borderRadius: 100,
  },
  loginButtonTitle: {
    fontSize: 12,
    color: theme.colors.white,
  },
  registerText: {
    fontSize: 14,
    color: theme.colors.lightGray,
  },
  registerButton: {
    fontSize: 16,
    marginTop: 12,
    color: theme.colors.green,
  },
});
