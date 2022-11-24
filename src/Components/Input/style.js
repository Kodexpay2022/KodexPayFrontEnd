import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  boxInput: {
    marginTop: 18,
  },
  contentLabel: {
    paddingLeft: 12,
    padding: 5,
  },
  label: {
    color: colors.blueMain,
    fontWeight: '500',
    fontSize: 14,
  },
  inputAsterisk: {
    color: 'red',
  },
  contentInput: {
    paddingHorizontal: 10,
  },
  input: {
    color: colors.blueMain,
    borderRadius: 8,
    borderColor: '#eef0f1',
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.whiteBackgroundInputs,
  },
});
