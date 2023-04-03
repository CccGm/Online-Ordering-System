import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    height: 150,
    backgroundColor: '#efefee',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#370247',
  },
  imageContainer: {
    width: 125,
    height: 125,
    padding: 5,
  },
  image: {width: '100%', height: '100%', flex: 1, borderRadius: 10},
  textContainer: {
    padding: 5,
    height: 125,
    paddingLeft: 10,
    width: '65%',
  },
  text: {
    fontSize: 22,
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: 'rgba(245,42,42,0.2)',
    width: 35,
    height: 35,
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
  },
});
