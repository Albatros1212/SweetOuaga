import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import GuestScreen from '../../screens/Guests';
import SearchResultsScreen from '../../screens/SearchResults';
import HomeTabNavigator from './HomeTabNavigator';
import DestinationSearchScreen from '../../screens/DestinationSearch';
import PostScreen from '../../screens/PostScreen';


const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{headerShown: false}} /> 
         <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen} option={{title: "Chercher une destination"}} />
        <Stack.Screen name={"Guests"} component={GuestScreen}  option={{title: "Combien de personnes?"}}/> 
        <Stack.Screen name={"Post"} component={PostScreen}  option={{title: "Detail"}}/> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
