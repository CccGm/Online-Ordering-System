import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: 20,
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
    backgroundColor: '#99999930',
    marginTop: 30,
    borderRadius: 20,
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleCOntainer: {
    backgroundColor: '#0d9b5bcc',

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
    color: '#fff',
    marginHorizontal: 15,
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
  brnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#0d9b5bcc',
  },
});
