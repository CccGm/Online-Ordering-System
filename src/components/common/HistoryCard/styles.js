import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: 15,
    height: 150,
    elevation: 8,
    shadowColor: '#370247',
    backgroundColor: '#efefee',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 18,
    marginHorizontal: 15,
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
    width: '62%',
  },
  textHeader: {
    fontSize: 22,
    marginTop: 8,
    color: '#000000cc',
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    fontSize: 18,
    // marginTop: 5,
  },
});
