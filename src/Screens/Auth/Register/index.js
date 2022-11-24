/* eslint-disable react/react-in-jsx-scope */
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input/Input';
import {styles} from './style';
import colors from '../../../styles/colors';
import Logo from '../../../Components/Logo/logo';

const Register = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Logo />
      </View>
      <ScrollView>
        <View style={styles.boxInputs}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Create Account</Text>
          </View>
          <View style={styles.contentInputs}>
            <Input text={'full name'} placeholder={'Full name'} />
            <Input text={'Email'} placeholder={'Mail@example.com'} />
            <Input text={'Company name'} placeholder={'Company name'} />
            <Input
              text={'Password'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <Input
              text={'Password'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <Input
              text={'Confirm password'}
              placeholder={'Confirm password'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.contentTermAndCondition}>
            <Text style={styles.textTermAndCondition}>
              Aceptó{' '}
              <Text style={styles.textTermAndConditionLink}>
                terminos y condiciones
              </Text>{' '}
              y{' '}
              <Text style={styles.textTermAndConditionLink}>
                politicas de privacidad
              </Text>
            </Text>
          </View>
          <View style={styles.boxButton}>
            <Button text={'Register'} backgroundColor={colors.mainColor} />
          </View>
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
