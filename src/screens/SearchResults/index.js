import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, FlatList} from 'react-native';

import feed from '../../../assets/data/feed';
import Post from '../../Components/Post/Index';
const SearchResultsScreen = props => {
  return (
    <View>
      <FlatList 
      data={feed}
      renderItem={({item}) => <Post post={item}/>}
      />
    </View>
  );
};

export default SearchResultsScreen;
