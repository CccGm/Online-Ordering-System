import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    height: 150,
    backgroundColor: COLORS.whiteefe,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    elevation: 8,
    shadowColor: COLORS.marun,
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
    backgroundColor: COLORS.lightRed,
    width: 35,
    height: 35,
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
  },
});
