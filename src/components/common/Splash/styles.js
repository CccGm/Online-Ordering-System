import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.34;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.aqua_Blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
});
