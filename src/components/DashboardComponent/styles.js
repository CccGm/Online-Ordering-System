import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: '38%',
    backgroundColor: '#fff',
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
    backgroundColor: '#0d9b5baa',
    borderRadius: 30,
  },
  iconText: {
    color: '#000000cc',
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
    color: '#0d9b5bcc',
  },
  wlcome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
