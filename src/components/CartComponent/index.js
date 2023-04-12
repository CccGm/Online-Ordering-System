import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCart from '../common/ProductCart';
import styles from './styles';
import {
  CheckOut_Data_Add,
  History_Data_Get,
  Remove_CheckOut_Data_Add,
} from '../../redux/action/CompleteOrder';
import {
  TEXT_CHECK_OUT,
  TEXT_LOADING,
  TEXT_TOTAL_PRICE,
} from '../../constants/strings';
import {useNavigation} from '@react-navigation/native';
import {Cart_Data_Get} from '../../redux/action/CartAction';
import {THANKYOU} from '../../constants/routeName';
import {COLORS} from '../../assets/theme/colors';

const CartComponent = () => {
  const cartData = useSelector(state => state.GetCartReducer);
  const complete = useSelector(state => state.CheckOutReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
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
            {'\u20A8'} : {cartData.total.toFixed(2)}
          </Text>
        </View>
        {complete.loading == false ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(
                CheckOut_Data_Add({
                  cart_id: cartData.data[0].cartId,
                  Total: cartData.total,
                }),
              );
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
