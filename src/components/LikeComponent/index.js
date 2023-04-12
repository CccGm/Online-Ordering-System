import React, {useCallback, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import LikeProduct from '../common/LikeProduct';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../assets/theme/colors';
import {Favorite_Data_Get} from '../../redux/action/FavoriteAction';

const LikeComponent = () => {
  const favoriteData = useSelector(state => state.GetFavoriteReducer);

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(Favorite_Data_Get());
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
          />
        }
        data={favoriteData.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <LikeProduct item={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default LikeComponent;
