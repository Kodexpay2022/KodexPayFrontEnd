/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../Components/Button';
import {ROUTERS} from '../../utils/navigation';
import {styles} from './style';
const ImageFound = require('../../../assets/img/img-first-screen.png');

const SplashScreen = ({navigation}) => {
  const handlePressGetStarted = () => {
    navigation.navigate(ROUTERS.InformationScreen);
  };

  const handlePressSignIn = () => {
    navigation.navigate(ROUTERS.SigIn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>
          La manera más fácil para empezar a generar pagos en cryptos
        </Text>
      </View>
      <View style={styles.boxImage}>
        <Image style={styles.image} source={ImageFound} />
      </View>
      <View style={styles.boxButtons}>
        <Button
          text={'Get Started'}
          onPress={handlePressGetStarted}
          backgroundColor={
            'linear-gradient(0deg, rgba(41,33,183,1) 34%, rgba(99,18,190,1) 52%);'
          }
        />
        <Button text={'Sign In'} onPress={handlePressSignIn} />
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
    tokenAuth: state.globalReducer.tokenAuth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
