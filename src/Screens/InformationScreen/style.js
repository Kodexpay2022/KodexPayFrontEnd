import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  slide: {
    marginTop: 20,
    height: '60%',
  },
  boxImage: {
    width: '100%',
    height: '55%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  boxText: {
    flex: 1,
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // Pagination
  containerStyle: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  boxTextButton: {
    width: '20%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textButton: {
    paddingLeft: 10,
  },
  boxPagination: {
    width: '60%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
