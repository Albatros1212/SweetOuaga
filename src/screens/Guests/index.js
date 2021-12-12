import {TestScheduler} from 'jest';
import {initial} from 'lodash';
import React, {useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {values} from 'regenerator-runtime';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';

const GuestScreen = props => {

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}> Adultes</Text>
            <Text style={{color: '#8d8d8d'}}> 13 ans et plus</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(-0, adults - 1))}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 18}}>{adults}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}>
              <Text style={{fontSize: 18}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}> Enfants</Text>
            <Text style={{color: '#8d8d8d'}}> 2 ans 12 ans</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(-0, children - 1))}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 18}}>{children}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(children + 1)}>
              <Text style={{fontSize: 18}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}> Les tous petits</Text>
            <Text style={{color: '#8d8d8d'}}> 2 ans et moins</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(Math.max(-0, infants - 1))}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 18}}>{infants}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(infants + 1)}>
              <Text style={{fontSize: 18}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable 
      onPress={() => 
        navigation.navigate('Home',{
        screen:'Explorer',
        params:{
          screen:'SearchResults',
        },
      })
    }
        style={{
          marginBottom: 20,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          height:50,
          marginHorizontal:20,
          
        }}>
        <Text style={{fontSize:20}}> Chercher!</Text>
      </Pressable>
    </View>
  );
};
export default GuestScreen;
