import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {CHANGEPASSWORD, HISTORY, LIKE} from '../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {setLogout} from '../../redux/action/Actions';
import {
  TEXT_CHANGE_PASSWORD,
  TEXT_HISTORY_DATA,
  TEXT_LOG_OUT,
  TEXT_SETTING,
  TEXT_SHARE_YOUR_FRIEND,
  TEXT_SUPPORT,
  TEXT_YOUR_FAVORITE_ITEM,
} from '../../constants/strings';

const ProfileComponent = () => {
  const {navigate} = useNavigation();
  const UserData = useSelector(state => state.UserDataReducer);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    Name: null,
    Email: null,
    Mo_No: null,
  });

  useState(() => {
    UserData.then(aa => {
      setUserData({
        ...userData,
        Name: aa.Name,
        Email: aa.Email,
        Mo_No: aa.Mo_No,
      });
    });
  }, []);

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
              {userData.Name}
            </Title>
            <Caption style={styles.caption}>@ {userData.Name}</Caption>
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
          <Text style={{color: '#777777', marginLeft: 20}}>
            {userData.Mo_No}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" size={20} color={'#777777'} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {userData.Email}
          </Text>
        </View>
      </View>
      {/* <View style={styles.infoBoxWrapper}>
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
      </View> */}

      <View>
        <TouchableRipple
          onPress={() => {
            navigate(LIKE);
          }}>
          <View style={styles.menuItem}>
            <Icon name={'heart-outline'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>{TEXT_YOUR_FAVORITE_ITEM}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigate(HISTORY);
          }}>
          <View style={styles.menuItem}>
            <Icon name={'history'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>{TEXT_HISTORY_DATA}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigate(CHANGEPASSWORD);
          }}>
          <View style={styles.menuItem}>
            <Icon name={'account-check-outline'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>{TEXT_CHANGE_PASSWORD}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              name={'account-settings-outline'}
              color={'#FF6347'}
              size={25}
            />
            <Text style={styles.menuItemText}>{TEXT_SETTING}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            dispatch(setLogout());
          }}>
          <View style={styles.menuItem}>
            <Icon name={'logout'} color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>{TEXT_LOG_OUT}</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileComponent;
