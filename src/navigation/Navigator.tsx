import {
  NavigationContainer,
  NavigationHelpers,
  NavigationState,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect} from 'react-redux';
import {DiscoverConnected} from '../modules/feed/containers/Discover';
import {LoginConnected} from '../modules/login/containers/Login';
import {RootState} from '../state';
import {theme} from '../theme';

export enum AppNavigators {
  AuthNavigator = 'AuthNavigator',
  AppNavigator = 'AppNavigator',
}

export enum AppRoute {
  LogIn = 'LogIn',
  Discover = 'Discover',
}

export type RouteParamList = {
  [AppRoute.LogIn]: undefined;
  [AppRoute.Discover]: undefined;
};

export let Navigation = {} as NavigationHelpers<RouteParamList> & {
  getRootState(): NavigationState;
  getCurrentRoute(): NavigationState['routes'][0];
};

const Stack = createStackNavigator();

interface StateProps {
  loggedIn: boolean;
}

const TopNavigator: React.FC<StateProps> = props => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: theme.colors.white,
      }}>
      {props.loggedIn ? (
        <>
          <Stack.Screen
            name={AppRoute.Discover}
            component={DiscoverConnected}
            options={() => ({
              title: 'Discover',
              contentStyle: {backgroundColor: theme.colors.white},
            })}
          />
        </>
      ) : (
        <Stack.Screen
          name={AppRoute.LogIn}
          component={LoginConnected}
          options={() => ({
            headerShown: false,
            contentStyle: {backgroundColor: theme.colors.white},
          })}
        />
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

export const TopNavigatorConnected = connect<StateProps, {}, {}, RootState>(
  state => ({loggedIn: state.app.loggedIn}),
)(TopNavigator) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
