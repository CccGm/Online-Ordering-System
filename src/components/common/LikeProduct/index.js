import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  Favorite_Data_Get,
  Favorite_Data_Remove,
  Remove_Favorite_Data_In_Remove,
} from '../../../redux/action/FavoriteAction';
import {
  TEXT_ALERT,
  TEXT_DATA_NOT_REMOVE_IN_FAVORITE,
  TEXT_DATA_REMOVE_IN_FAVORITE,
} from '../../../constants/strings';

const LikeProduct = props => {
  const dispatch = useDispatch();
  const response = useSelector(state => state.RemoveFavoriteReducer);

  useEffect(() => {
    if (response.loading == false) {
      if (response.status == 1) {
        dispatch(Favorite_Data_Get());
        dispatch(Remove_Favorite_Data_In_Remove());
        ToastAndroid.show(
          TEXT_DATA_REMOVE_IN_FAVORITE,
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      } else if (response.status == 0) {
        Alert.alert(TEXT_ALERT, TEXT_DATA_NOT_REMOVE_IN_FAVORITE);
        dispatch(Remove_Favorite_Data_In_Remove());
      }
    }
  }, [response.loading == false]);

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
        <Text style={[styles.text, {color: 'grey', fontSize: 18}]}>
          {'\u20A8'} : {props.item.productDetails.price}
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            marginTop: 8,
          }}
          onPress={() => {
            dispatch(Favorite_Data_Remove(props.item._id));
          }}>
          <View style={styles.iconContainer}>
            <Icon name={'heart'} size={25} color={'#ff0000'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeProduct;
