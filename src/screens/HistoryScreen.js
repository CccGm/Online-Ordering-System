import React, {useEffect} from 'react';
import {View} from 'react-native';
import HistoryComponent from '../components/HistoryComponent';
import Header from '../components/common/Header';
import {TEXT_COMPLETED_PRODUCT, TEXT_LIKE_PRODUCT} from '../constants/strings';
import {useDispatch, useSelector} from 'react-redux';
import {History_Data_Get} from '../redux/action/CompleteOrder';
import NoDataFound from '../components/common/NoDataFound';
import ActivityLoader from '../components/common/ActivityLoader';
import {COLORS} from '../assets/theme/colors';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const historyData = useSelector(state => state.GetHistoryDataReducer);

  useEffect(() => {
    dispatch(History_Data_Get());
  }, []);

  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <Header title={TEXT_COMPLETED_PRODUCT} hideBackBtn={false} />
      {historyData.loading != false ? (
        <ActivityLoader />
      ) : historyData.data.length == 0 ? (
        <NoDataFound />
      ) : (
        <HistoryComponent />
      )}
    </View>
  );
};

export default HistoryScreen;
