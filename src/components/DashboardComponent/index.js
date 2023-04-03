import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import ProductCard from '../common/ProdutCard';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../constants/routeName';
import {useSelector} from 'react-redux';

const DashboardComponent = () => {
  const productData = useSelector(state => state.GetProductReducer);
  const cartData = useSelector(state => state.GetCartReducer);
  const UserData = useSelector(state => state.UserDataReducer);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState(productData.data);
  const [userData, setUserData] = useState({Name: null});

  useState(() => {
    UserData.then(aa => {
      setUserData({...userData, Name: aa.Name});
    });
  }, []);

  console.log(userData.Name);
  const {navigate} = useNavigation();

  const seatchFilterFunction = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toLowerCase();
        const textData = text.toUpperCase();
        console.log('--------', textData);
        return itemData.indexOf(textData) > -1;
      });
      console.log('data ---------', newData);
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomContainer}>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#0d9b5bcc'}}>
            {userData.Name} {'\u2728'}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            // marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigate(CART)}>
          <Icon name="shopping-cart" size={28} color={'#000000'} />
          <View
            style={{
              position: 'absolute',
              width: 55,
              height: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00ff0035',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
                marginLeft: 5,
                marginBottom: 3,
              }}>
              {cartData.data.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: '90%', marginLeft: 20}}>
        <TextInput
          mode="outlined"
          style={styles.textInputStyle}
          onChangeText={text => seatchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          left={<TextInput.Icon icon="home-search-outline" size={25} />}
          placeholder="Search Here"
        />
      </View>

      <FlatList
        data={filterData.length ? filterData : masterData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
        }}
        renderItem={({item}) => <ProductCard card={item} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export default DashboardComponent;
