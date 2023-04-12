import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
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
import {
  TEXT_ALERT,
  TEXT_PRODUCT_NOT_DECRESED,
  TEXT_PRODUCT_NOT_INCRESED,
  TEXT_PRODUCT_NOT_REMOVE,
} from '../../../constants/strings';
import {COLORS} from '../../../assets/theme/colors';

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
      } else if (increaseQuantity.status == 0) {
        Alert.alert(TEXT_ALERT, TEXT_PRODUCT_NOT_INCRESED);
        dispatch(Remove_Increase_In_Remove());
      }
    }
  }, [increaseQuantity]);

  dispatch(() => {
    if (decreaseQuantity.loading == false) {
      if (decreaseQuantity.status == 1) {
        dispatch(Cart_Data_Get());
        dispatch(Remove_Decrease_In_Remove());
      } else if (decreaseQuantity.status == 0) {
        Alert.alert(TEXT_ALERT, TEXT_PRODUCT_NOT_DECRESED);
        dispatch(Remove_Decrease_In_Remove());
      }
    }
  }, [decreaseQuantity]);

  dispatch(() => {
    if (removeProduct.loading == false) {
      if (removeProduct.status == 1) {
        dispatch(Cart_Data_Get());
        dispatch(Remove_Data_In_Remove());
      } else if (removeProduct.status == 0) {
        Alert.alert(TEXT_ALERT, TEXT_PRODUCT_NOT_REMOVE);
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
              color: COLORS.transparent,
              fontWeight: 'bold',
            },
          ]}
          numberOfLines={1}>
          {props.item.productDetails.title}
        </Text>
        <Text
          style={[
            styles.text,
            {color: COLORS.blackaa, fontSize: 18, marginTop: 5},
          ]}>
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
              {
                marginHorizontal: 12,
                fontWeight: 'bold',
                color: COLORS.transparent,
              },
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
        <Icon name={'close'} size={25} color={COLORS.red} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCart;
