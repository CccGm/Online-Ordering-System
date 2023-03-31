import React from 'react';
import {Text, View} from 'react-native-animatable';
import {Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
const NoDataFound = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../../../assets/images/shop.png')}
          style={{height: 300, width: 300}}
          resizeMode="contain"
        />
        <Animatable.Text
          animation="fadeInUpBig"
          style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>
          Oops! Your bag is empty!
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInUpBig"
          style={{
            color: '#00000060',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          There is nothing in your bag. Let's add some items.
        </Animatable.Text>
      </View>
    </View>
  );
};

export default NoDataFound;
