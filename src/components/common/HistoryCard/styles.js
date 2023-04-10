import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

export default styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: 15,
    height: 150,
    elevation: 8,
    shadowColor: COLORS.marun,
    backgroundColor: COLORS.whiteefe,
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
    color: COLORS.blackaa,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.grey,
    fontSize: 18,
    // marginTop: 5,
  },
});
