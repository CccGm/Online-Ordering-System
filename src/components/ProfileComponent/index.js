import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {LIKE} from '../../constants/routeName';
import {useDispatch} from 'react-redux';
import {setLogout} from '../../redux/Actions';

const ProfileComponent = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={require('../../assets/images/logo.png')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {marginTop: 15, marginBottom: 5}]}>
              Ashish noe
            </Title>
            <Caption style={styles.caption}>@ashish</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" size={20} color={'#777777'} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            Ahmedabad , India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" size={20} color={'#777777'} />
          <Text style={{color: '#777777', marginLeft: 20}}>+91 1234567899</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" size={20} color={'#777777'} />
          <Text style={{color: '#777777', marginLeft: 20}}>abc@gmail.com </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 1},
          ]}>
          <Title>$ 150</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orderd</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            navigate(LIKE);
          }}>
          <View style={styles.menuItem}>
            <Icon name={'heart-outline'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Your Favorite</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name={'share-outline'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Sare Your Friend</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name={'account-check-outline'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              name={'account-settings-outline'}
              color={'#FF6347'}
              size={25}
            />
            <Text style={styles.menuItemText}>Setting</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            dispatch(setLogout());
          }}>
          <View style={styles.menuItem}>
            <Icon name={'logout'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileComponent;
