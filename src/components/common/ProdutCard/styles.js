import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width / 2 - 30;

export default styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 20,
    width: width,
    height: 220,
    marginBottom: 15,
    backgroundColor: '#efefee',
    borderRadius: 10,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: '100%',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 17,
    marginTop: 10,
  },
  textContainer: {
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  plusContainer: {
    backgroundColor: '#0d9b5bcc',
    width: 28,
    height: 28,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 5,
  },
});
