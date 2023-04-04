import React from 'react';
import {View, FlatList} from 'react-native';
import LikeProduct from '../common/LikeProduct';
import {useSelector} from 'react-redux';

const LikeComponent = () => {
  const favoriteData = useSelector(state => state.GetFavoriteReducer);

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        data={favoriteData.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <LikeProduct item={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default LikeComponent;
