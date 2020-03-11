import _ from 'lodash';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from '../../../lib/TextInput/TextInput';
import {IUserAllowedToLogin} from '../../../models';
import {styles} from './styles/LeginStyles';

export interface IObjectProps {
  userAllowedToLogIn: IUserAllowedToLogin;
}

export interface IActionProps {
  onLogInPress: () => void;
  onRegisterPress: () => void;
}

enum FormErrors {
  username = 'username',
  password = 'password',
}

export const Login: React.FC<IObjectProps & IActionProps> = props => {
  const [userInput, setUserInput] = useState<IUserAllowedToLogin>({
    userName: '',
    password: '',
  });
  const [formErrors, setFormErrors] = React.useState<FormErrors[]>([]);

  const userNameEmpty = userInput.userName.trim() === '';
  const edittedAndEmptyEmail = userInput.password.trim() === '';

  const handleSubmit = () => {
    const currentErrors: FormErrors[] = [...formErrors];
    if (
      userNameEmpty ||
      !/(?!^ +$)^.+$/.test(userInput.userName) ||
      userInput.userName !== props.userAllowedToLogIn.userName
    ) {
      currentErrors.push(FormErrors.username);
    }
    if (
      edittedAndEmptyEmail ||
      userInput.password !== props.userAllowedToLogIn.password
    ) {
      currentErrors.push(FormErrors.password);
    }
    setFormErrors(_.uniq(currentErrors));

    if (currentErrors.length === 0) {
      props.onLogInPress();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{flex: 1}}>
        <View style={styles.inputContainer}>
          <TextInput
            iconName="ios-person"
            iconType="ionicon"
            placeHolder="Username"
            onFocus={() => setFormErrors([])}
            value={userInput.userName}
            errorMessage={
              formErrors.find(error => error === FormErrors.username) &&
              'Invalid username'
            }
            onChangeText={text => {
              setFormErrors([]);
              setUserInput({userName: text, password: userInput.password});
            }}
          />
          <TextInput
            iconName="ios-lock"
            iconType="ionicon"
            placeHolder="Password"
            onFocus={() => setFormErrors([])}
            secureTextEntry={true}
            errorMessage={
              formErrors.find(error => error === FormErrors.password) &&
              'Invalid password'
            }
            value={userInput.password}
            onChangeText={text => {
              setFormErrors([]);
              setUserInput({userName: userInput.userName, password: text});
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            titleStyle={styles.loginButtonTitle}
            buttonStyle={styles.loginButton}
            containerStyle={styles.loginButtonContainer}
            title="LOGIN"
            onPress={() => {
              setFormErrors([]);
              handleSubmit();
            }}
          />
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Not a member yet?</Text>
            <TouchableOpacity
              hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
              onPress={props.onRegisterPress}>
              <Text style={styles.registerButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
