import React, {useContext} from 'react';

import GroceryScreen from './GroceryScreen';
import StatsScreen from './StatsScreen';
import ConfirmationReservation from './ConfirmationReservation';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import {ThemeContext} from 'react-native-elements';
import Chambre from './Chambre';
import Acceuil from './Acceuil';
import Profil from './Profil';
import Annonce from './Annonce';
import Profit from './Profit';

const Tab = createBottomTabNavigator();

const Locateur = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Chambre') {
              iconName = 'bed';
              return <Icon name={iconName} size={size} color={color} />;
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-circle';
              return <Ionicon name={iconName} size={size} color={color} />;}
            else if (route.name === 'Annonce') {
              iconName = 'announcement';
              return <MaterialIcon name={iconName} size={size} color={color} />;
            } 
            else if(route.name === 'Profit') {
              iconName = 'dollar-sign';
              return <Feather name={iconName} size={size} color={color} />;
            }
            else if(route.name === 'Profil') {
              iconName = 'user';
              return <Icon name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',
        })}>
        <Tab.Screen name="Notifications" component={ConfirmationReservation}/>
        <Tab.Screen name="Annonce" component={Annonce} />
        <Tab.Screen name="Profit" component={Profit}/>
        <Tab.Screen name="Profil" component={Profil}/>
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Locateur;