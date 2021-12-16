import {ChambreImage} from '../MesImages/ChambreImage.jpeg';
import {Overlay} from 'react-native-elements';
import { Component } from 'react';

import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';

import {Card, Button,Input, ThemeContext} from 'react-native-elements';

import EditItem from './EditItem';

import {connect} from 'react-redux';
import {editItem} from '../actions/ItemsAction';

const Historique = () => {

  const styles = StyleSheet.create({
 
      ElementButton :{
        marginLeft : 50,
        marginRight: 50
      },
      TextmarginRight :{
        marginRight: 80,
        fontWeight:'bold',
      },
      ViewStyle :{
        flexDirection:'row',
      },



  });
return (
<ScrollView>
   <View style={{flexDirection:'column',marginTop:90}}>
       <Card>
         <View style={{flexDirection:'column'}}>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:80}}>Pérode:</Text>
              <Text >Du 30-11-2021 au 02-12-2021</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:70}}>Chambre :</Text>
              <Text >Lit double</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:110}} >Prix:</Text>
              <Text >80$</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:70}}>Bénéficice:</Text>
              <Text >20$</Text>
            </View>
         </View>
       </Card>
       <Card>
         <View style={{flexDirection:'column'}}>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:80}}>Pérode:</Text>
              <Text >Du 02-03-2021 au 03-03-2021</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:70}}>Chambre :</Text>
              <Text >Chambre familiale</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:110}} >Prix:</Text>
              <Text >200$</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:70}}>Bénéficice:</Text>
              <Text >25$</Text>
            </View>
         </View>
       </Card>
       <Card>
         <View style={{flexDirection:'column'}}>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:80}}>Pérode:</Text>
              <Text >Du 01-01-2021 au 04-01-2021</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:70}}>Chambre :</Text>
              <Text >Chambre standard</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:110}} >Prix:</Text>
              <Text >90$</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Text style={{marginRight:70}}>Bénéficice:</Text>
              <Text >22$</Text>
            </View>
         </View>
       </Card>  
       <View style={styles.ElementButton}>
         <Button 
           title="Fermer"
           buttonStyle={{
           backgroundColor:'blue',
           borderRadius: 40,
           marginTop:30
           }}/>
       </View>
    </View>
</ScrollView>
  );
    }

export default Historique;