import {ChambreImage} from '../MesImages/ChambreImage.jpeg';
import {Overlay} from 'react-native-elements';
import { Component } from 'react';

import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

import {Card, Button,Input, ThemeContext} from 'react-native-elements';

import EditItem from './EditItem';

import {connect} from 'react-redux';
import {editItem} from '../actions/ItemsAction';

const Profit = () => {

  const styles = StyleSheet.create({
 
      ElementButton :{
        marginLeft : 50,
        marginRight: 50
      },



  });
return (

   <View style={{flexDirection:'column',marginTop:90}}>
       <Card>
         <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold'}}> Réservations totales :</Text>
            <Text style={{marginLeft:180, color:'red'}}>26</Text>
         </View>
       </Card>
       <Card>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold'}}> Bénéfices accumulés :</Text>
            <Text style={{marginLeft:170, color:'red'}}>500$</Text>
        </View>
       </Card>
    
       <View style={styles.ElementButton}>
         <Button 
           title="Voir l'historique des réservations"
           buttonStyle={{
           backgroundColor:'blue',
           borderRadius: 40,
           marginTop:30
           }}/>
       </View>
    </View>

  );
    }


export default Profit;