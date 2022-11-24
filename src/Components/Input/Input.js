/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';

const Input = ({text, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.boxInput}>
      <View style={styles.contentLabel}>
        <Text style={styles.label}>
          <Text style={styles.inputAsterisk}>*</Text> {text}
        </Text>
      </View>
      <View style={styles.contentInput}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && true}
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
