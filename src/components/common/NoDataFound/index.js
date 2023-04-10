import React from 'react';
import {View} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import {COLORS} from '../../../assets/theme/colors';
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
          style={{color: COLORS.transparent, fontSize: 20, fontWeight: 'bold'}}>
          Oops! Your bag is empty!
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInUpBig"
          style={{
            color: COLORS.transparent,
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
