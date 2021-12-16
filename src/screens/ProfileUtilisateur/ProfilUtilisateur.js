import { View, Text, StyleSheet,ScrollView ,Image,SafeAreaView } from 'react-native'
import { Card, Button,Divider } from 'react-native-elements'
import {Overlay,Avatar} from 'react-native-elements';
import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { VISITOR_KEYS } from '@babel/types';
import {TouchableRipple} from 'react-native-paper'

const ProfilUtilisateur = () => {
  const styles = StyleSheet.create({
    container: {
      flex: '1'
    },
    icon: {
      backgroundColor: '#ccc',
      position: 'absolute',
      right: 0,
      bottom: 0
     },
    TexForm: {
      justifyContent: 'center',
      fontWeight: "bold",
      marginBottom: 30,
      fontSize:20,
      fontSize:25
    },
    ElementPosition:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop:40
    },
    iconEdit: {
      name: 'pencil',
      type: 'font-awesome',
      color: 'white',
      size: 15,
    },
    TextStyleForm: {
      justifyContent: 'center',
      marginBottom: 10,
      marginLeft:20,
    },
    StyleIcon: {
      marginLeft:65,
    },
    });
return(
<SafeAreaView style={{flex: 1}}>
 <ScrollView> 
  <Card>
  <View>
    <FontAwesome5 name="arrow-left" size={30} color="blue"/>
  </View>
  <View style={styles.ElementPosition}>
    <Avatar
    size="large"
    rounded
    source={require('../MesImages/PhotoHomme.jpg')}
    />
    <View style={{paddingHorizontal:50}}>
      <Text style={{marginBottom: 15, fontWeight:'bold', fontSize:40}}>Anatole</Text>
      <View style={{flexDirection:'row',marginBottom: 15, marginTop:-10}}>
        <MaterialCommunityIcon size={20} name='email'/>
        <Text>Anatole@gmail.com</Text>
      </View>
    </View>
  </View>
  <View style={{ 
     height:50, 
     alignItems:'flex-start',
     justifyContent:'center',
     flexDirection:'row',
     marginBottom:20,
     marginStart:-80
     }}>
   <Button
    icon={
      <Icon
        name="edit"
        size={15}
        color="white"
      />}
          title="Modifier la photo de profil"
          buttonStyle={{
          backgroundColor:'blue',
            borderRadius: 10,
          }}/>
  </View>
  <View style={{flexDirection:'column', justifyContent:'center',marginLeft:30}}>
      <Text style={styles.TexForm}>Paramètres du compte</Text>
      <TouchableRipple>
        <View style = {{flexDirection:'row', marginBottom:5}}>
          <Icon name="user" size={20} color="blue"/>
          <Text style = {styles.TextStyleForm}>Informations personnelles</Text>
          <MaterialIcon name="navigate-next" size={20} color="blue" style={{marginLeft:65}}/>
        </View>
      </TouchableRipple>
      <Divider width={1} style={{color:'black', marginBottom:20, marginRight:40}} />
      <TouchableRipple>
        <View style = {{flexDirection:'row',marginBottom:5}}>
          <MaterialIcon name="payments" size={20} color="blue"/>
          <Text style = {styles.TextStyleForm} >Mode de paiments</Text>
          <MaterialIcon name="navigate-next" size={20} color="blue" style={{marginLeft:105}}/>
        </View>
      </TouchableRipple>
      <Divider width={1} style={{color:'black', marginBottom:20, marginRight:40}} />
      <TouchableRipple>
      <View style = {{flexDirection:'row',marginBottom:5}}>
          <Icon name="history" size={20} color="blue"/>
          <Text style = {styles.TextStyleForm} >Historique de réservations</Text>
          <MaterialIcon name="navigate-next" size={20} color="blue" style={{marginLeft:60}}/>
        </View>
      </TouchableRipple>
      <Divider width={1} style={{color:'black', marginBottom:20, marginRight:40}} />
      <TouchableRipple>
        <View style = {{flexDirection:'row',marginBottom:5}}>
          <Entypo name="help-with-circle" size={20} color="blue"/>
          <Text style = {styles.TextStyleForm} >Assistance</Text>
          <MaterialIcon name="navigate-next" size={20} color="blue" style={{marginLeft:153}}/>
        </View>
      </TouchableRipple>
      <Divider width={1} style={{color:'black', marginBottom:20, marginRight:40}} />
      <TouchableRipple>
      <View style = {{flexDirection:'row',marginBottom:5}}>
          <MaterialIcon name="privacy-tip" size={20} color="blue"/>
          <Text style = {styles.TextStyleForm} >Confidentialité</Text>
          <MaterialIcon name="navigate-next" size={20} color="blue" style={{marginLeft:130}}/>
        </View>
      </TouchableRipple>
      <Divider width={1} style={{color:'black', marginBottom:20, marginRight:40}} />
      <TouchableRipple>
      <View style = {{flexDirection:'row',marginBottom:5}}>
          <MaterialCommunityIcon name="logout" size={20} color="blue"/>
          <Text style = {styles.TextStyleForm} >Se déconnecter</Text>
          <MaterialIcon name="navigate-next" size={20} color="blue" style={{marginLeft:120}}/>
        </View>
      </TouchableRipple>
    </View>
    </Card>
 </ScrollView>
</SafeAreaView>
);
};
export default ProfilUtilisateur;