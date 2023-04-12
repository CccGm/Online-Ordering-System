import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import ProductCard from '../common/ProdutCard';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {TEXT_WELCOME} from '../../constants/strings';
import {COLORS} from '../../assets/theme/colors';
import {Product_Data} from '../../redux/action/DashBoardAction';

const DashboardComponent = () => {
  const productData = useSelector(state => state.GetProductReducer);
  const cartData = useSelector(state => state.GetCartReducer);
  const UserData = useSelector(state => state.UserDataReducer);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState(productData.data);
  const [userData, setUserData] = useState({Name: null});
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  useState(() => {
    UserData.then(res => {
      setUserData({...userData, Name: res.Name});
    });
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(Product_Data());
      setRefreshing(false);
    }, 1000);
  }, []);

  const seatchFilterFunction = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toLowerCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
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
              color={COLORS.white}
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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
          />
        }
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
