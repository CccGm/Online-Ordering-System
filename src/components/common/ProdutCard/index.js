import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAILS} from '../../../constants/routeName';

const ProductCard = props => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate(PRODUCTDETAILS, {data: props.card});
      }}>
      <TouchableOpacity style={{alignItems: 'flex-end'}}>
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
