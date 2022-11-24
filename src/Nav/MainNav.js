import {
  Stack,
  ROUTERS,
  Navigator,
  navigationRef,
  PROTECTEDROUTES,
  NavigationContainer,
} from '../utils/navigation';
import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import SignIn from '../Screens/Auth/SignIn';
import Dashboard from '../Screens/Dashboard';
import Register from '../Screens/Auth/Register';
import SplashScreen from '../Screens/SplashScreen';
import LoaderScreen from '../Screens/LoaderScreen';
import {fetchToken} from '../redux/actions/actionGlobal';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import InformationScreen from '../Screens/InformationScreen';
import MessageVerification from '../Screens/Auth/MessageVerification';
import EnterCodeScreen from '../Screens/Auth/ForgotPassword/EnterCodeScreen/EnterCodeScreen';
import ResetPasswordScreen from '../Screens/Auth/ForgotPassword/ResetPasswordScreen/ResetPasswordScreen';

const optionNavigator = {
  headerShown: false,
  gesturesEnabled: false,
};

const MainNavigation = ({tokenAuth, actions}) => {
  useEffect(() => {
    actions.fetchTokenAction();
  }, []);

  if (tokenAuth.token === null) {
    return <LoaderScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {tokenAuth?.token === undefined ? (
          <>
            <Stack.Screen
              name={ROUTERS.SplashScreen}
              component={SplashScreen}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.InformationScreen}
              component={InformationScreen}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.SigIn}
              component={SignIn}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.Register}
              component={Register}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.MessageVerification}
              component={MessageVerification}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.ForgotPassword}
              component={ForgotPassword}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.EnterCodeScreen}
              component={EnterCodeScreen}
              options={optionNavigator}
            />
            <Stack.Screen
              name={ROUTERS.ResetPasswordScreen}
              component={ResetPasswordScreen}
              options={optionNavigator}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={PROTECTEDROUTES.Dashboard}
              component={Dashboard}
              options={optionNavigator}
            />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {fetchTokenAction: fetchToken(dispatch)},
  };
};
function mapStateToProps(state) {
  return {
    tokenAuth: state.globalReducer.tokenAuth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
