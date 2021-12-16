import {Overlay } from 'react-native-elements';
import React, { Component} from 'react';
import {Card, Input, Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
import { TouchableRipple } from 'react-native-paper';

const Inscription = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginLeft:20,
      marginRight:20,
      paddingVertical:20
    },
    TextWelcomeForm: {
      justifyContent: 'center',
      fontWeight: '50',
      fontSize:20,
      paddingVertical:70,
      color:"blue",
    },
    TextFieldForm: {
      fontWeight: "bold",
      fontSize: 20,
      paddingLeft:10
    },
    TextLienSincrire:{
      fontWeight: "bold",
      fontSize: 20,
      textDecorationLine: 'underline',
      paddingLeft:100
    },
    });
  return(
    <SafeAreaView style={{flex: 1}}>
     <ScrollView>
      <View style={styles.container}>
       <View style={{marginLeft:10}}>
         <FontAwesome5 name="arrow-left" size={30} color="blue"/>
       </View>
      <Card>
      <View style={{marginBottom:30}}>
        <Text style={styles.TextFieldForm}>Prénom</Text>
        <Card>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TextInput placeholder = "Prénom" inputContainerStyle={{borderBottomWidth:2}}
             inputStyle={{fontSize: 24}}/>
          </View>
        </Card>
       </View>
       <View>
       <Text style={styles.TextFieldForm}>Nom</Text>
       <Card >
        <View style={{flexDirection:'row',alignItems:'center'}}>
         <TextInput placeholder = "Nom" inputContainerStyle={{borderBottomWidth: 30}}
          inputStyle={{fontSize: 24}}/>
        </View>
        </Card>
        </View>
        <View>
          <Text style={styles.TextFieldForm}>Adresse courriel</Text>
          <Card >
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <TextInput placeholder = "Adresse courriel" inputContainerStyle={{borderBottomWidth: 30}}
             inputStyle={{fontSize: 24}}/>
           </View>
          </Card>
        </View>
        <View>
          <Text style={styles.TextFieldForm}>Date de naissance</Text>
          <Card >
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <TextInput placeholder = "Date de naissance" inputContainerStyle={{borderBottomWidth: 30}}
             inputStyle={{fontSize: 24}}/>
           </View>
          </Card>
        </View>
        <View>
          <Text style={styles.TextFieldForm}>Genre</Text>
          <Card >
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <TextInput placeholder = "Genre" inputContainerStyle={{borderBottomWidth: 30}}
             inputStyle={{fontSize: 24}}/>
           </View>
          </Card>
        </View>
        <View>
          <Text style={styles.TextFieldForm}>Nom d'utilisateur</Text>
          <Card >
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <TextInput placeholder = "Nom d'utilisateur" inputContainerStyle={{borderBottomWidth: 30}}
             inputStyle={{fontSize: 24}}/>
           </View>
          </Card>
        </View>
        <View>
          <Text style={styles.TextFieldForm}>Mot de passe</Text>
          <Card >
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <TextInput placeholder = "Mot de passe" inputContainerStyle={{borderBottomWidth: 30}}
             inputStyle={{fontSize: 24}}/>
           </View>
          </Card>
        </View>
       <Button
          title="Soumettre" buttonStyle={{
            backgroundColor: "blue",
            marginTop:30,
            marginBottom: 20,
            marginLeft:15,
            marginRight:15
          }}
          titleStyle={{fontSize: 20}}/>
        </Card>
      </View>
     </ScrollView>
    </SafeAreaView>
  )
};

export default Inscription;
