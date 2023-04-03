import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import ProductCart from '../common/ProductCart';
import styles from './styles';
import {CheckOut_Data_Add} from '../../redux/action/CompleteOrder';

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
      {cartData.total == 0 ? (
        <View></View>
      ) : (
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text
              style={[
                styles.text,
                {fontSize: 22, color: '#000000da', fontWeight: 'bold'},
              ]}>
              Total Price :-
            </Text>
            <Text
              style={[
                styles.text,
                {fontSize: 22, color: '#000000da', fontWeight: 'bold'},
              ]}>
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
            <Text style={styles.text}>Check Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartComponent;
