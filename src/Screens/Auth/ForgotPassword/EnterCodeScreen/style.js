import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteBackground,
    height: '100%',
    width: '100%',
    flex: 1,
    padding: 5,
  },
  boxInputs: {
    flex: Platform.OS === 'android' ? 3 : 2,
  },
  contentTitle: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    color: colors.blueMain,
    fontSize: 30,
    fontWeight: '600',
  },
  contentTextSendCode: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
  TextSendCode: {
    textAlign: 'center',
    color: colors.grayText,
  },
  contentInputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  boxInput: {
    flex: 1,
    marginTop: 18,
    margin: 10,
  },
  input: {
    color: colors.blueMain,
    borderRadius: 8,
    borderColor: '#eef0f1',
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.whiteBackgroundInputs,
  },

  box: {
    flex: 1,
    justifyContent: 'center',
  },
});
