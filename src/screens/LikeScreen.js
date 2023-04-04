import React from 'react';
import {View} from 'react-native';
import Header from '../components/common/Header';
import LikeComponent from '../components/LikeComponent';
import {useDispatch, useSelector} from 'react-redux';
import {Favorite_Data_Get} from '../redux/action/FavoriteAction';
import ActivityLoader from '../components/common/ActivityLoader';
import NoDataFound from '../components/common/NoDataFound';
import {TEXT_LIKE_PRODUCT} from '../constants/strings';

const LikeScreen = () => {
  const likeData = useSelector(state => state.GetFavoriteReducer);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={TEXT_LIKE_PRODUCT} hideBackBtn={false} />
      {likeData.loading != false ? (
        <ActivityLoader />
      ) : likeData.data.length == 0 ? (
        <NoDataFound />
      ) : (
        <View style={{flex: 1}}>
          <LikeComponent />
        </View>
      )}
    </View>
  );
};

export default LikeScreen;
