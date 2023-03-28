import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

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
          Order Date : 19 - 5 - 23
        </Text>
        <Text
          style={[styles.text, {color: 'grey', fontSize: 18, marginTop: 5}]}>
          Order Price : {'\u20A8'} : {props.item.price}
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;
