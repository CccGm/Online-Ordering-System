import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/theme/colors';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.24;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.aqua_Blue,
  },
  header: {
    flex: 2,
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
  title: {
    color: COLORS.dark_Blue,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.grey,
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: COLORS.btn_linear_1_up,
  },
  textSign: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
