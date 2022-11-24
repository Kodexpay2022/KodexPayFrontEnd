import * as React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = Stack.Navigator;

const ROUTERS = {
  SigIn: 'SigIn',
  Register: 'Register',
  SplashScreen: 'SplashScreen',
  ForgotPassword: 'ForgotPassword',
  EnterCodeScreen: 'EnterCodeScreen',
  InformationScreen: 'InformationScreen',
  MessageVerification: 'MessageVerification',
  ResetPasswordScreen: 'ResetPasswordScreen',
};

const PROTECTEDROUTES = {
  Dashboard: 'Dashboard',
};

export {Stack, NavigationContainer, Navigator, ROUTERS, PROTECTEDROUTES};

export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef?.current?.navigate(name, params);
}
