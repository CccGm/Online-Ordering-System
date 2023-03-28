import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-animatable';
import {CART} from '../../../constants/routeName';

const ProductCardDetails = props => {
  const navigation = useNavigation();
  const iteData = props.route.params.data;

  return (
    <SafeAreaView style={{flex: 1, elevation: 8, shadowColor: '#370247'}}>
      <View style={styles.iconContainer}>
        <Icon
          name={'arrow-back'}
          size={28}
          color={'#000'}
          onPress={() => navigation.goBack()}
        />
        <Icon
          name={'shopping-cart'}
          size={28}
          color={'#000'}
          onPress={() => navigation.navigate(CART)}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: iteData.imageUrl}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.detailsContainer}>
        <View style={styles.textCOntainer}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>{iteData.title}</Text>
          </View>
          <View style={styles.titleCOntainer}>
            <Text style={styles.price}>
              {'\u20A8'} : {iteData.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={[styles.text, {fontSize: 20}]}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 20,
            }}>
            {iteData.description}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.boderBtnText}>-</Text>
              </TouchableOpacity>

              <Text
                style={[
                  styles.boderBtnText,
                  {marginHorizontal: 10, fontWeight: 'bold', color: '#000'},
                ]}>
                1
              </Text>

              <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.boderBtnText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.brnContainer}>
              <Text style={styles.price}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCardDetails;
