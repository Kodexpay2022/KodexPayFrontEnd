import {Platform, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteBackground,
    height: '100%',
    width: '100%',
    flex: 1,
    padding: 5,
  },
  boxLogo: {
    flex: 2,
    marginTop: Platform.OS === 'android' ? '20%' : '38%',
    marginBottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInputs: {
    flex: Platform.OS === 'android' ? 6 : 5,
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
  contentTermAndCondition: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  textTermAndCondition: {
    color: colors.grayText,
    fontSize: 12,
  },
  textTermAndConditionLink: {
    color: colors.mainColor,
    fontSize: 12,
    fontWeight: '500',
  },
  boxButton: {
    flex: 2,
    marginVertical: 23,
    marginBottom: 50,
  },
});
