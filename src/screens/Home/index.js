import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View>
        {/*Search bar */}
      <ImageBackground
        source={require('../../../assets/images/chambre1.jpg')}
        style={styles.image}>
        {/*Affichage du titre du menu */}
        <Text style={styles.title}>Faites le tour...</Text>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
              <Fontisto name="search" size={25} color={"blue"}/>
          <Text style={styles.searchButtonText}> Explorer nos belles maisons </Text>
        </Pressable>
        {/*Bouton de recheche */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn cliked')}>
          <Text style={styles.buttonText}>  Chercher Autour de vous</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
