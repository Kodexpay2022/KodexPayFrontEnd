/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../../../Components/Button';
import Logo from '../../../../Components/Logo/logo';
import {ROUTERS} from '../../../../utils/navigation';
import {styles} from './style';
// import {ROUTERS} from '../../../utils/navigation';

const EnterCodeScreen = ({navigation}) => {
  const handlePressSend = () => {
    navigation.navigate(ROUTERS.ResetPasswordScreen);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.boxInputs}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Enter 4 Digits Code</Text>
        </View>
        <View style={styles.contentTextSendCode}>
          <Text style={styles.TextSendCode}>
            translate Enter the 4 digits number that you received on your email
            *****or@****.com
          </Text>
        </View>
        <View style={styles.contentInputs}>
          <View style={styles.boxInput}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.boxInput}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.boxInput}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.boxInput}>
            <TextInput style={styles.input} />
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <Button
          text={'Send'}
          backgroundColor={'#03082a'}
          onPress={handlePressSend}
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

export default connect(mapStateToProps, mapDispatchToProps)(EnterCodeScreen);
