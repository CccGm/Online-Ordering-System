import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/theme/colors';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: '38%',
    backgroundColor: COLORS.white,
  },
  welcomContainer: {
    marginTop: 20,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTouch: {alignItems: 'center', justifyContent: 'center'},
  iconView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.darkGreenaa,
    borderRadius: 30,
  },
  iconText: {
    color: COLORS.transparent,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    marginLeft: 5,
  },
  userText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.darkGreencc,
  },
  wlcome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
