import { PricingCard } from 'react-native-elements';
import {TestScheduler} from '@jest/core';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements/dist/buttons/Button';
import {Card,Input, ThemeContext} from 'react-native-elements';

const ConfirmationReservation = () => {

const styles = StyleSheet.create({
        container: {
          color:'transparent'
        },
    });

return(
<ScrollView>
<Card >
  <Card.Image source={require('../MesImages/Chambre2.png')}/>
  <PricingCard
  color="blue"  
  title="Chambre 2 lits"
  price="$120"
  info={['David Gagnon','2 personnes', '3 nuits','Du 30-11-2021 au 2-12-2021']}
  button={{ title: 'Accepter', AntDesign: 'downcircle'}}
  />
  <Button
          title="Réfuser"
          buttonStyle={{
            backgroundColor: 'blue',
          }}/>
</Card>
</ScrollView>
)
}

export default ConfirmationReservation;