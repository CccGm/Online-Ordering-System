import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  priceContainer: {
    justifyContent: 'center',
  },
  price: {
    backgroundColor: '#bbb3b3a1',
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
    backgroundColor: '#346910ff',
    borderRadius: 25,
    marginVertical: 8,
    paddingHorizontal: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  textTotal: {
    fontSize: 22,
    color: '#000000da',
    fontWeight: 'bold',
  },
});
