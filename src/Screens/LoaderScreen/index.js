import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const LoaderScreen = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <Text>LoaderScreen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoaderScreen);
