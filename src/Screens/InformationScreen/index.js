/* eslint-disable react/react-in-jsx-scope */
import {styles} from './style';
import {connect} from 'react-redux';
import Button from '../../Components/Button';
import {View, Text, Image} from 'react-native';
import {ROUTERS} from '../../utils/navigation';
const image = require('../../../assets/img/Top-2.png');

const InformationScreen = ({navigation}) => {
  const handleButtonCreateAccount = () => {
    navigation.navigate(ROUTERS.Register);
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.boxText}>
        <View>
          <Text>Lorem Ipsum dolor</Text>
        </View>
        <View>
          <Button
            text={'Create Account'}
            onPress={handleButtonCreateAccount}
            backgroundColor={'#03082a'}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen);
