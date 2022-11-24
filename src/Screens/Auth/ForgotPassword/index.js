/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input/Input';
import Logo from '../../../Components/Logo/logo';
import {ROUTERS} from '../../../utils/navigation';
import {styles} from './style';

const ForgotPassword = ({navigation}) => {
  const handlePressSendCode = () => {
    navigation.navigate(ROUTERS.EnterCodeScreen);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.boxInputs}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Forgot Password</Text>
        </View>
        <View style={styles.contentTextSendCode}>
          <Text style={styles.TextSendCode}>
            Enter You email so we cand send you a code for the verification
            proccess
          </Text>
        </View>
        <View style={styles.contentInputs}>
          <Input text={'Email'} placeholder={'Mail@example.com'} />
        </View>
      </View>
      <View style={styles.box}>
        <Button
          text={'Send code'}
          onPress={handlePressSendCode}
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
