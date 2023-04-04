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
import {TEXT_WELCOME} from '../../constants/strings';

const DashboardComponent = () => {
  const productData = useSelector(state => state.GetProductReducer);
  const cartData = useSelector(state => state.GetCartReducer);
  const UserData = useSelector(state => state.UserDataReducer);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState(productData.data);
  const [userData, setUserData] = useState({Name: null});

  useState(() => {
    UserData.then(res => {
      setUserData({...userData, Name: res.Name});
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
          <Text style={styles.wlcome}>{TEXT_WELCOME}</Text>
          <Text style={styles.userText}>
            {userData.Name} {'\u2728'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconTouch}
          onPress={() => navigate(CART)}>
          <View style={styles.iconView}>
            <Icon
              name="shopping-cart"
              size={24}
              color={'#ffffff'}
              style={{position: 'absolute'}}
            />
            <Text style={styles.iconText}>{cartData.data.length}</Text>
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
