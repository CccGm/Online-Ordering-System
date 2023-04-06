import React from 'react';
import {FlatList, View} from 'react-native';
import HistoryCard from '../common/HistoryCard';
import {useSelector} from 'react-redux';

const HistoryComponent = () => {
  const historyData = useSelector(state => state.GetHistoryDataReducer);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        data={historyData.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <HistoryCard item={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default HistoryComponent;
