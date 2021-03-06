import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import ExploreNavigator from './ExploreNavigator';
import ProfileScreen from '../../screens/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connexion from '../../screens/Home/Connexion';
import SearchResultsMap from '../../screens/SearchResultsMaps';
import PostScreen from '../../screens/PostScreen';
import TownScreen from '../../screens/TownScreen/townScreen';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Explorer'}
        //component={TownScreen}
       component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Sauvegarder'}
        component={TownScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Connexion'}
        component={Connexion}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="login" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigator;
