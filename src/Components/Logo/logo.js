/* eslint-disable react/react-in-jsx-scope */
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
const ImageLogo = require('../../../assets/img/Logo-Kodex.png');

const Logo = ({navigation}) => {
  return (
    <View style={styles.boxLogo}>
      <Image source={ImageLogo} style={styles.image} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
