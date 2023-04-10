import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gery77,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    textAlign: 'center',
    width: 250,
    height: 'auto',
    backgroundColor: COLORS.lightBlue,
  },
  btntext: {
    fontSize: 18,
    color: COLORS.white,
    padding: 8,
  },
  text: {
    fontSize: 20,
    color: COLORS.drakGrey90,
  },
});

export default styles;
