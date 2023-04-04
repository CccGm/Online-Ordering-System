import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCart from '../common/ProductCart';
import styles from './styles';
import {CheckOut_Data_Add} from '../../redux/action/CompleteOrder';
import {TEXT_CHECK_OUT, TEXT_TOTAL_PRICE} from '../../constants/strings';

const CartComponent = () => {
  const cartData = useSelector(state => state.GetCartReducer);
  const dispatch = useDispatch();

  console.log(cartData, 'cartData');
  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginVertical: 10}}>
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
            {'\u20A8'} : {cartData.total}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(
              CheckOut_Data_Add({
                cart_id: cartData.cartId,
                Total: cartData.total,
              }),
            );
          }}>
          <Text style={styles.text}>{TEXT_CHECK_OUT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartComponent;
