/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input/Input';
import Logo from '../../../Components/Logo/logo';
import {ROUTERS} from '../../../utils/navigation';
import {styles} from './style';

const SignIn = ({navigation}) => {
  const handlePressRegister = () => {
    navigation.navigate(ROUTERS.Register);
  };

  const handlePressForgotPassword = () => {
    navigation.navigate(ROUTERS.ForgotPassword);
  };

  const handlePressCreateAccount = () => {
    navigation.navigate(ROUTERS.MessageVerification);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.boxInputs}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Welcome KodexPay</Text>
        </View>
        <View style={styles.contentInputs}>
          <Input text={'Email'} placeholder={'Mail@example.com'} />
          <Input
            text={'Password'}
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.contentLinks}>
          <TouchableOpacity onPress={handlePressForgotPassword}>
            <Text style={styles.textLinks}>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressRegister}>
            <Text style={styles.textLinks}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Button
          text={'Create Account'}
          onPress={handlePressCreateAccount}
          backgroundColor={'#03082a'}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      // setTokenAction: setToken(dispatch),
    },
  };
};
function mapStateToProps(state) {
  return {
    //  tokenAuth: state.globalReducer.tokenAuth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
