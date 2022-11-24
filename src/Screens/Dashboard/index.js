import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const Dashboard = () => {
  return (
    <View style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
      <Text>dashboard</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
