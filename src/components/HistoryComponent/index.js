import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import HistoryCard from '../common/HistoryCard';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../assets/theme/colors';
import {History_Data_Get} from '../../redux/action/CompleteOrder';

const HistoryComponent = () => {
  const historyData = useSelector(state => state.GetHistoryDataReducer);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(History_Data_Get());
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
          />
        }
        data={historyData.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <HistoryCard item={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default HistoryComponent;
