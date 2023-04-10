import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

export default styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
  },
  iconView: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 30,
    marginBottom: 18,
    marginLeft: 12,
  },
  iconText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    flex: 1,
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.drakGrey90,
    marginTop: 30,
    borderRadius: 20,
  },
  text: {
    color: COLORS.transparent,
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleCOntainer: {
    backgroundColor: COLORS.darkGreencc,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  textCOntainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    color: COLORS.white,
    marginHorizontal: 15,
  },
  borderBtn: {
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  brnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: COLORS.darkGreencc,
  },
});
