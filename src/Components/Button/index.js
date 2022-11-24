/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';

const Button = ({text, onPress, backgroundColor}) => {
  return (
    <View style={styles.contentButton}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {backgroundColor: backgroundColor}]}>
        <Text style={styles.TextButton}>{text}</Text>
      </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Button);
