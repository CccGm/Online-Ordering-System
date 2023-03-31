import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  Decrease_Product,
  Increase_Product,
  Remove_Decrease_In_Remove,
  Remove_Increase_In_Remove,
} from '../../../redux/action/CartProductAction';
import {
  Cart_Data_Get,
  Cart_Data_Remove,
  Remove_Data_In_Remove,
} from '../../../redux/action/CartAction';

const ProductCart = props => {
  const dispatch = useDispatch();
  const increaseQuantity = useSelector(state => state.IncreaseProductReducer);
  const decreaseQuantity = useSelector(state => state.DecreaseProductReducer);
  const removeProduct = useSelector(state => state.RemoveProductReducer);

  dispatch(() => {
    if (increaseQuantity.loading == false) {
      if (increaseQuantity.status == 1) {
        dispatch(Cart_Data_Get());
        dispatch(Remove_Increase_In_Remove());
        ToastAndroid.show(
          'Quantity Increase',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      } else if (increaseQuantity.status == 0) {
        Alert.alert('Alert', 'Quantity not Increase');
        dispatch(Remove_Increase_In_Remove());
      }
    }
  }, [increaseQuantity]);

  dispatch(() => {
    if (decreaseQuantity.loading == false) {
      if (decreaseQuantity.status == 1) {
        dispatch(Cart_Data_Get());
        dispatch(Remove_Decrease_In_Remove());
        ToastAndroid.show(
          'Quantity Decrease',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      } else if (decreaseQuantity.status == 0) {
        Alert.alert('Alert', 'Quantity not Decrease');
        dispatch(Remove_Decrease_In_Remove());
      }
    }
  }, [decreaseQuantity]);

  dispatch(() => {
    if (removeProduct.loading == false) {
      if (removeProduct.status == 1) {
        dispatch(Cart_Data_Get());
        dispatch(Remove_Data_In_Remove());
        ToastAndroid.show(
          'Product Removed',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      } else if (removeProduct.status == 0) {
        Alert.alert('Alert', 'Product Not Removed');
        dispatch(Remove_Data_In_Remove());
      }
    }
  }, [removeProduct]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: props.item.productDetails.imageUrl}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {
              color: '#000000cc',
              fontWeight: 'bold',
            },
          ]}
          numberOfLines={1}>
          {props.item.productDetails.title}
        </Text>
        <Text
          style={[styles.text, {color: 'grey', fontSize: 18, marginTop: 5}]}>
          {'\u20A8'} : {props.item.productDetails.price}
        </Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.borderBtn}
            onPress={() => {
              dispatch(Decrease_Product(props.item._id));
            }}>
            <Text style={styles.boderBtnText}>-</Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.boderBtnText,
              {marginHorizontal: 12, fontWeight: 'bold', color: '#000000aa'},
            ]}>
            {props.item.quantity}
          </Text>

          <TouchableOpacity
            style={styles.borderBtn}
            onPress={() => {
              dispatch(Increase_Product(props.item._id));
            }}>
            <Text style={styles.boderBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
        }}
        onPress={() => {
          dispatch(Cart_Data_Remove(props.item._id));
        }}>
        <Icon name={'close'} size={25} color={'#ff0000aa'} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCart;
