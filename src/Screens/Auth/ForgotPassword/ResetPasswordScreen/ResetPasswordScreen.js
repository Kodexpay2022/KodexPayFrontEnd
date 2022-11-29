/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input/Input';
import Logo from '../../../../Components/Logo/logo';
import {ROUTERS} from '../../../../utils/navigation';
// import {ROUTERS} from '../../../utils/navigation';
import {styles} from '../style';

const ResetPasswordScreen = ({navigation}) => {
  const handlePressSigIn = () => {
    navigation.navigate(ROUTERS.SigIn);
  };
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.boxInputs}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Reset Password</Text>
        </View>
        <View style={styles.contentTextSendCode}>
          <Text style={styles.TextSendCode}>
            Set new password that different from previous password for your
            account
          </Text>
        </View>
        <View style={styles.contentInputs}>
          <Input text={'Password'} placeholder={'Password'} />
          <Input
            text={'Confirm password'}
            placeholder={'Confirm password'}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.box}>
        <Button
          onPress={handlePressSigIn}
          text={'Save password'}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordScreen);
