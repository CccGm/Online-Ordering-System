import React, {useEffect} from 'react';
import {View} from 'react-native';
import HistoryComponent from '../components/HistoryComponent';
import Header from '../components/common/Header';
import {TEXT_HISTORY_DATA} from '../constants/strings';
import {useSelector} from 'react-redux';
import NoDataFound from '../components/common/NoDataFound';
import ActivityLoader from '../components/common/ActivityLoader';
import {COLORS} from '../assets/theme/colors';

const HistoryScreen = () => {
  const historyData = useSelector(state => state.GetHistoryDataReducer);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'center',
      }}>
      <Header title={TEXT_HISTORY_DATA} hideBackBtn={false} />
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
