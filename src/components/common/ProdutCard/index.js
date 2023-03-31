import React, {useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAILS} from '../../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {
  Favorite_Data_Get,
  Favorite_Data_Add,
  Remove_Favorite_Data_In_Add,
} from '../../../redux/action/FavoriteAction';

const ProductCard = props => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const response = useSelector(state => state.AddFavoriteReducer);

  useEffect(() => {
    if (response.loading == false) {
      if (response.status == 1) {
        dispatch(Remove_Favorite_Data_In_Add());
        dispatch(Favorite_Data_Get());
        ToastAndroid.show(
          'Data Add Into Cart',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      } else if (response.status == 0) {
        Alert.alert('Alert', 'Data not Add in to Cart');
        dispatch(Remove_Favorite_Data_In_Add());
      }
    }
  }, [response]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate(PRODUCTDETAILS, {data: props.card});
      }}>
      <TouchableOpacity
        style={{alignItems: 'flex-end'}}
        onPress={() => {
          dispatch(Favorite_Data_Add(props.card._id));
        }}>
        <View style={styles.iconContainer}>
          <Icon name={'heart'} size={18} color={'black'} />
        </View>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: props.card.imageUrl}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <Text style={[styles.text, {paddingLeft: 5}]} numberOfLines={1}>
        {props.card.title}
      </Text>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {'\u20A8'} : {props.card.price}
        </Text>
        <View style={styles.plusContainer}>
          <FontAwesome5 name={'plus'} size={18} color={'#dfeadc'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
