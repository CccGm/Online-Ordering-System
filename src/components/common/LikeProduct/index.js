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
} from '../../../constants/strings';
import {COLORS} from '../../../assets/theme/colors';
import {PRODUCTDETAILS} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';

const LikeProduct = props => {
  const dispatch = useDispatch();
  const response = useSelector(state => state.RemoveFavoriteReducer);
  const {navigate} = useNavigation();

  useEffect(() => {
    if (response.loading == false) {
      if (response.status == 1) {
        dispatch(Favorite_Data_Get());
        dispatch(Remove_Favorite_Data_In_Remove());
      } else if (response.status == 0) {
        Alert.alert(TEXT_ALERT, TEXT_DATA_NOT_REMOVE_IN_FAVORITE);
        dispatch(Remove_Favorite_Data_In_Remove());
      }
    }
  }, [response.loading == false]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate(PRODUCTDETAILS, {data: props.item.productDetails});
      }}>
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
        <Text style={[styles.text, {color: COLORS.blackaa, fontSize: 18}]}>
          {'\u20A8'} : {props.item.productDetails.price}
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            marginTop: 8,
            marginLeft: 180,
          }}
          onPress={() => {
            dispatch(Favorite_Data_Remove(props.item._id));
          }}>
          <View style={styles.iconContainer}>
            <Icon name={'heart'} size={25} color={COLORS.red} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default LikeProduct;
