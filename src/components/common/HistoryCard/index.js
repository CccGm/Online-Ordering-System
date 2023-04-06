import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {
  TEXT_ORDER_DATE,
  TEXT_ORDER_PRICE,
  TEXT_ORDER_QUANTITY,
} from '../../../constants/strings';

const HistoryCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: props.item.imageUrl}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader} numberOfLines={1}>
          {props.item.title}
        </Text>
        <Text style={[styles.text]} numberOfLines={1}>
          {TEXT_ORDER_DATE} : {props.item.createdAt}
        </Text>
        <Text style={[styles.text]}>
          {TEXT_ORDER_QUANTITY} : {props.item.quantity}
        </Text>
        <Text style={[styles.text]}>
          {TEXT_ORDER_PRICE} : {props.item.productTotalAmount}.{'\u20A8'}
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;
