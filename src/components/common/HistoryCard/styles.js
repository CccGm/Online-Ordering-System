import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

export default styles = StyleSheet.create({
  container: {
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
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  textContainer: {
    height: 125,
    paddingLeft: 5,
    width: '65%',
  },
  textHeader: {
    fontSize: 18,
    marginTop: 5,
    color: COLORS.blackaa,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.grey,
    fontSize: 12,
    marginTop: 3,
  },
});
