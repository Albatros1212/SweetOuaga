import {TestScheduler} from 'jest';
import React, {useState} from 'react';
import {View, Text, FlatList, Image, uri, TextInput, Pressable} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import searchResults from '../../../assets/data/search.js';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View>
      {/*input component */}

      <TextInput
        style={styles.textInput}
        placeholder="Quelle destination?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/*Liste des destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
              <View style={styles.iconContainer}> 
                  <Entypo name={"location-pin"} size={30}   />
 </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
