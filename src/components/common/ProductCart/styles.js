import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

export default styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 10,
    height: 150,
    elevation: 5,
    shadowColor: COLORS.lightMarunS,
    backgroundColor: COLORS.whiteefe,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
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
    padding: 5,
    height: 125,
    paddingLeft: 10,
    width: '62%',
  },
  text: {
    fontSize: 22,
    marginTop: 3,
  },
  counterContainer: {
    flexDirection: 'row',
    marginLeft: '25%',
    alignItems: 'center',
    marginTop: 10,
  },
  borderBtn: {
    borderColor: COLORS.grey,
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
});
