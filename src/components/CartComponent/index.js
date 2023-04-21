import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Alert,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCart from '../common/ProductCart';
import styles from './styles';
import {
  CheckOut_Data_Add,
  History_Data_Get,
  Remove_CheckOut_Data_Add,
} from '../../redux/action/CompleteOrder';
import {
  TEXT_ALERT,
  TEXT_CHECK_OUT,
  TEXT_LOADING,
  TEXT_TOTAL_PRICE,
} from '../../constants/strings';
import {useNavigation} from '@react-navigation/native';
import {Cart_Data_Get} from '../../redux/action/CartAction';
import {THANKYOU} from '../../constants/routeName';
import {COLORS} from '../../assets/theme/colors';
import RazorpayCheckout from 'react-native-razorpay';

const CartComponent = () => {
  const cartData = useSelector(state => state.GetCartReducer);
  const complete = useSelector(state => state.CheckOutReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const UserData = useSelector(state => state.UserDataReducer);
  const [userData, setUserData] = useState({
    Name: null,
    Email: null,
    Mo_No: null,
  });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (complete.loading == false) {
      if (complete.status == 1) {
        navigation.navigate(THANKYOU);
        dispatch(Cart_Data_Get());
        dispatch(History_Data_Get());
        dispatch(Remove_CheckOut_Data_Add());
      }
    }
  }, [complete]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(Cart_Data_Get());
      setRefreshing(false);
    }, 1000);
  }, []);
  console.log(userData.Mo_No, 'mo.');
  useState(() => {
    UserData.then(aa => {
      setUserData({
        ...userData,
        Name: aa.Name,
        Email: aa.Email,
        Mo_No: `+91 ${aa.Mo_No}`,
      });
    });
  }, []);
  const Payment_method_call = () => {
    var options = {
      description: 'Online Ordering System Payment',
      currency: 'INR',
      key: 'rzp_test_6h0SNCgoC393ON',
      amount: Math.round(cartData.total) * 100,
      name: userData.Name,
      prefill: {
        email: userData.Email,
        contact: userData.Mo_No,
        name: userData.Name,
      },
      theme: {color: COLORS.aqua_Blue},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log(data, 'Payment Success----');
        ToastAndroid.show(
          'Payment Success',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
        dispatch(
          CheckOut_Data_Add({
            cart_id: cartData.data[0].cartId,
            Total: cartData.total,
          }),
        );
      })
      .catch(error => {
        console.log(cartData.total);
        Alert.alert(TEXT_ALERT, 'Payment Failed');
        console.log(error, 'Payment Faile----');
      });
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
            />
          }
          data={cartData.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ProductCart item={item} />}
          keyExtractor={item => item._id}
        />
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTotal]}>
            {TEXT_TOTAL_PRICE} :-
          </Text>
          <Text style={[styles.text, styles.textTotal]}>
            {'\u20A8'} : {Math.round(cartData.total)}
          </Text>
        </View>
        {complete.loading == false ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Payment_method_call();
            }}>
            <Text style={styles.text}>{TEXT_CHECK_OUT}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, {backgroundColor: COLORS.green80}]}
            disabled={true}>
            <Text style={styles.text}>{TEXT_LOADING}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartComponent;
