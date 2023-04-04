import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TEXT_ORDER_DATE, TEXT_ORDER_PRICE} from '../../../constants/strings';

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
        <Text
          style={[
            styles.text,
            {
              color: '#000000cc',
              fontWeight: 'bold',
            },
          ]}
          numberOfLines={1}>
          {props.item.title}
        </Text>
        <Text
          style={[styles.text, {color: 'grey', fontSize: 18, marginTop: 5}]}>
          {TEXT_ORDER_DATE} : 19 - 5 - 23
        </Text>
        <Text
          style={[styles.text, {color: 'grey', fontSize: 18, marginTop: 5}]}>
          {TEXT_ORDER_PRICE} : {'\u20A8'} : {props.item.price}
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;
