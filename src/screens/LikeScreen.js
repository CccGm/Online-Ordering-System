import React, {useEffect} from 'react';
import {View} from 'react-native';
import Header from '../components/common/Header';
import LikeComponent from '../components/LikeComponent';
import {useDispatch, useSelector} from 'react-redux';
import {Favorite_Data_Get} from '../redux/action/FavoriteAction';
import ActivityLoader from '../components/common/ActivityLoader';
import NoDataFound from '../components/common/NoDataFound';

const LikeScreen = () => {
  const dispatch = useDispatch();
  const likeData = useSelector(state => state.GetFavoriteReducer);

  console.log(likeData, 'like data screen --------------');

  useEffect(() => {
    dispatch(Favorite_Data_Get());
  }, []);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {likeData.loading != false ? (
        <ActivityLoader />
      ) : likeData.data.length == 0 ? (
        <NoDataFound />
      ) : (
        <View style={{flex: 1}}>
          <Header title={'Like Product'} hideBackBtn={false} />
          <LikeComponent />
        </View>
      )}
    </View>
  );
};

export default LikeScreen;
