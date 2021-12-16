import {ChambreImage} from '../MesImages/ChambreImage.jpeg';
import {Overlay} from 'react-native-elements';
import { Component } from 'react';

import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

import {Card, Button,Input, ThemeContext} from 'react-native-elements';

import EditItem from './EditItem';

import {connect} from 'react-redux';
import {editItem} from '../actions/ItemsAction';

const Message = () => {

  const styles = StyleSheet.create({
 
      ElementButton :{
        marginLeft : 50,
        marginRight: 50
      },



  });
return (
<View style={{flexDirection:'column'}}>
    <View style={{marginTop:50}}>
      <Card>
        <TextInput
          multiline={true}
          placeholder='Ecrivez votre message à publier'
        />
      </Card>
    </View>
    <View style={styles.ElementButton}>
      <Button 
        title="Publier"
        buttonStyle={{
        backgroundColor:'blue',
        borderRadius: 40,
        marginTop:30
        }}/>
        <Button 
        title="Annuler"
        buttonStyle={{
            backgroundColor:'blue',
            borderRadius: 40,
            marginTop:30
        }}
       />
    </View>
</View>

  );
    }


export default Message;