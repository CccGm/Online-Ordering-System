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
  const cardData = useSelector(state => state.GetCartReducer);
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

  var abc = cardData.data.map(index => {
    if (index.productDetails._id == iteData._id) {
      return index.productDetails._id;
    }
  });

  var InCart;
  abc.map(index => {
    if (index != undefined) {
      InCart = index;
    }
  });

  return (
    <SafeAreaView style={{flex: 1, elevation: 8, shadowColor: '#5d296b'}}>
      <View style={styles.iconContainer}>
        <Icon
          name={'arrow-back'}
          size={28}
          color={'#000'}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          style={styles.iconTouch}
          onPress={() => navigation.navigate(CART)}>
          <Icon
            name="shopping-cart"
            size={28}
            color={'#000'}
            style={{position: 'absolute'}}
          />
          <View style={styles.iconView}>
            <Text style={styles.iconText}>{cardData.data.length}</Text>
          </View>
        </TouchableOpacity>
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
          {InCart == iteData._id ? (
            <TouchableOpacity
              style={[styles.brnContainer, {backgroundColor: '#41b48090'}]}
              disabled={true}>
              <Text style={styles.price}>Product Available In Cart</Text>
            </TouchableOpacity>
          ) : response.loading == false ? (
            <TouchableOpacity
              style={styles.brnContainer}
              onPress={() => {
                dispatch(Cart_Data_Add(iteData._id));
              }}>
              <Text style={styles.price}>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.brnContainer, {backgroundColor: '#0d9b5b90'}]}
              disabled={true}>
              <Text style={styles.price}>Add To Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCardDetails;
