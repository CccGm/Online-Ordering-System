import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const LikeProduct = props => {
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
        <Text style={[styles.text, {color: 'grey', fontSize: 18}]}>
          {'\u20A8'} : {props.item.price}
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            marginTop: 8,
          }}>
          <View style={styles.iconContainer}>
            <Icon name={'heart'} size={25} color={'black'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeProduct;
