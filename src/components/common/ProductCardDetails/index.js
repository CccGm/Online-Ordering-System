import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-animatable';
import {CART} from '../../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {
  Cart_Data_Add,
  Cart_Data_Get,
  Remove_Data_In_Add,
} from '../../../redux/action/CartAction';

const ProductCardDetails = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const response = useSelector(state => state.AddProductReducer);
  const iteData = props.route.params.data;

  useEffect(() => {
    if (response.loading == false) {
      if (response.status == 1) {
        navigation.navigate(CART);
        dispatch(Remove_Data_In_Add());
        dispatch(Cart_Data_Get());
        ToastAndroid.show(
          'Data Add Into Cart',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      } else if (response.status == 0) {
        Alert.alert('Alert', 'Data not Add in to Cart');
        dispatch(Remove_Data_In_Add());
      }
    }
  }, [response]);

  return (
    <SafeAreaView style={{flex: 1, elevation: 8, shadowColor: '#5d296b'}}>
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

          <TouchableOpacity
            style={styles.brnContainer}
            onPress={() => {
              dispatch(Cart_Data_Add(iteData._id));
            }}>
            <Text style={styles.price}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCardDetails;
