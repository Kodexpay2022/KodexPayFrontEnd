/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../../Components/Button';
import Logo from '../../../Components/Logo/logo';
// import {ROUTERS} from '../../../utils/navigation';
import {styles} from './style';

const MessageVerification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.boxInputs}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Translate we just sent you an SMS</Text>
        </View>
        <View style={styles.contentTextSendCode}>
          <Text style={styles.TextSendCode}>
            Enter the security code we sent to *****2232
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
        <View style={styles.contentLinks}>
          <TouchableOpacity>
            <Text style={styles.textLinks}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Button text={'Send'} backgroundColor={'#03082a'} />
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
)(MessageVerification);
