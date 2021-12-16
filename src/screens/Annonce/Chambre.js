import {ChambreImage} from '../MesImages/ChambreImage.jpeg';
import {Overlay} from 'react-native-elements';
import { Component } from 'react';

import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

import {Card, Button,Input, ThemeContext} from 'react-native-elements';

import EditItem from './EditItem';

import {connect} from 'react-redux';
import {editItem} from '../actions/ItemsAction';

const Chambre = () => {

  const styles = StyleSheet.create({
    container: {
      marginBottom : 10,
    },
    ElementView :{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 15,
      },
      ElementButton :{
        marginBottom : 5,
        heigh : 0,
        alignItems : 'center'
      },
      Textelement: {
        //flexDirection: 'column',
        backgroundColor:'transparent',
      },


  });
  return (
    <Card>
      <Card.Image style = {styles.container} source={require('../MesImages/Chambre2.png')}/>
      <Button
          title="Télécharger une photo"
          buttonStyle={{
            backgroundColor: 'blue',
          }}/>
      <View style = {styles.Textelement}>
        <Input placeholder= "Ville"/> 
      </View>
      <View style = {styles.Textelement}>
        <Input placeholder = "Capacité"/>
      </View>
      <View style = {styles.Textelement}>
        <Input placeholder = "Prix"/>
      </View>
      <View style = {styles.ElementButton}>
        <Button
          title="Mettre en ligne"
          buttonStyle={{
            backgroundColor:'blue',
            borderRadius: 40,
            
          }}/>
      </View>
      <View style = {styles.ElementButton}>
        <Button
          title="Annuler"
          buttonStyle={{
            backgroundColor:'blue',
            borderRadius: 40,
          }}/>
      </View>
    </Card>

  );
    }


export default Chambre;
