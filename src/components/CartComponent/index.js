import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-animatable';
import {useSelector} from 'react-redux';
import ProductCart from '../common/ProductCart';
import styles from './styles';

const CartComponent = () => {
  const cartData = useSelector(state => state.GetCartReducer);

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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Check Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartComponent;
