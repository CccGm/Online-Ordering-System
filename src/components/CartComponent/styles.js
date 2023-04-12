import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  price: {
    backgroundColor: COLORS.info,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  button: {
    height: 50,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.greenff,
    borderRadius: 25,
    marginVertical: 8,
    paddingHorizontal: 50,
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
  textTotal: {
    fontSize: 22,
    color: COLORS.transparent,
    fontWeight: 'bold',
  },
});
