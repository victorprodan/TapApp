import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { LocationPreview } from '../models';
import { DiscoverConnected } from '../modules/feed/containers/Discover';
import { SpotDetailsConnected } from '../modules/feed/containers/SpotDetails';
import { LoginConnected } from '../modules/login/containers/Login';
import { ProfileConnected } from '../modules/profile/containers/Profile';
import { RootState } from '../state';
import { theme } from '../theme';

export enum AppRoute {
  LogIn = 'LogIn',
  Discover = 'Discover',
  SpotDetails = 'SpotDetails',
  Profile = 'Profile'
}

export type RouteParamList = {
  [AppRoute.LogIn]: undefined;
  [AppRoute.Discover]: undefined;
  [AppRoute.SpotDetails]: {location: LocationPreview};
  [AppRoute.Profile]: undefined;
};

interface StateProps {
  loggedIn: boolean;
}


export const navigationRef = React.createRef<any>();

export const navigate = (name: string, params: any) =>
  navigationRef.current?.navigate(name, params);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator: React.SFC = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Navigate to Discover" component={Feed} />
    </Drawer.Navigator>
  );

const Feed: React.SFC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppRoute.LogIn}
      component={DiscoverConnected}
      options={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" type="ionicon" size={40} />
          </TouchableOpacity>
        ),
        headerTitle: 'Discover',
        headerLeftContainerStyle: {marginLeft: 20},
        contentStyle: {backgroundColor: theme.colors.white},
      })}
    />
    <Stack.Screen
      name={AppRoute.SpotDetails}
      component={SpotDetailsConnected}
      options={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" type="ionicon" size={32} />
          </TouchableOpacity>
        ),
        headerTitle: 'Spot Details',
        headerTransparent: true,
        headerLeftContainerStyle: {marginLeft: 20},
        contentStyle: {backgroundColor: theme.colors.white},
      })}
    />
  </Stack.Navigator>
);

const Profile: React.SFC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppRoute.LogIn}
      component={ProfileConnected}
      options={() => ({
        headerShown: false,
        contentStyle: {backgroundColor: theme.colors.white},
      })}
    />
  </Stack.Navigator>
);

const TopNavigator: React.FC<StateProps> = props => (
  <NavigationContainer ref={navigationRef}>
    {props.loggedIn ? (
      <Tab.Navigator 
      tabBarOptions={{ style: Platform.OS === 'android' ? {paddingBottom: 20, height: 60, paddingTop: 25} : undefined}}

      >
        <Tab.Screen name="Discover" options={{ tabBarLabel: ({focused}) => <Icon
      name="ios-compass"
      type="ionicon"
      size={32}
      color={focused ? theme.colors.green : theme.colors.text}
    />}} component={DrawerNavigator} />
        <Tab.Screen name="Profile" options={() => ({tabBarLabel: ({focused}) => <Icon
      name="ios-person"
      type="ionicon"
      size={32}
            color={focused ? theme.colors.green : theme.colors.text}
    />})} component={Profile} />
      </Tab.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoute.LogIn}
          component={LoginConnected}
          options={() => ({
            headerShown: false,
            contentStyle: {backgroundColor: theme.colors.white},
          })}
        />
      </Stack.Navigator>
    )}
  </NavigationContainer>
);

export const TopNavigatorConnected = connect<StateProps, {}, {}, RootState>(
  state => ({loggedIn: state.app.loggedIn}),
)(TopNavigator) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
