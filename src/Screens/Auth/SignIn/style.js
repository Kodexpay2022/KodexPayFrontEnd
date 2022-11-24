import colors from '../../../styles/colors';
import {Platform, StyleSheet} from 'react-native';

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
  },
  title: {
    color: colors.blueMain,
    fontSize: 30,
    fontWeight: '600',
  },

  contentLinks: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  textLinks: {
    color: colors.mainColor,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
  },
});
