import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03082a',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  boxTitle: {
    padding: 10,
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 25,
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  boxImage: {
    padding: 10,
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: '80%',
  },
  boxButtons: {
    padding: 5,
    flex: 1,
  },
});
