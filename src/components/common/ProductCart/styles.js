import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    height: 150,

    backgroundColor: '#efefee',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
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
    width: '62%',
  },
  text: {
    fontSize: 22,
    marginTop: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    marginLeft: '25%',
    alignItems: 'center',
    marginTop: 10,
  },
  borderBtn: {
    borderColor: 'grey',
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
