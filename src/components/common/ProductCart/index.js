import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductCart = props => {
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
          {'\u20A8'} : {props.item.price}
        </Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.borderBtn}>
            <Text style={styles.boderBtnText}>-</Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.boderBtnText,
              {marginHorizontal: 12, fontWeight: 'bold', color: '#000000aa'},
            ]}>
            1
          </Text>

          <TouchableOpacity style={styles.borderBtn}>
            <Text style={styles.boderBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
        }}>
        <Icon name={'close'} size={25} color={'#ff0000aa'} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCart;
