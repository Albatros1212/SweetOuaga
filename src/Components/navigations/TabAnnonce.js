import {ChambreImage} from '../MesImages/ChambreImage.jpeg';
import {Overlay} from 'react-native-elements';
import { Component } from 'react';

import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

import {Card, Button,Input, ThemeContext} from 'react-native-elements';

import EditItem from './EditItem';

import {connect} from 'react-redux';
import {editItem} from '../actions/ItemsAction';
import Chambre from './Chambre';
import Message from './Message';

//import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import SearchResults from '../../screens/SearchResults';
//import SearchResultsMaps from '../../screens/SearchResultsMaps';
//import SearchResultsMap from '../../screens/SearchResultsMaps';



const Tab = createMaterialTopTabNavigator();

const Annonce = (props) =>{
    return(
       <Tab.Navigator Tab>
           <Tab.Screen name={'Chambre'} component={Chambre} /> 
           <Tab.Screen name={'Message'} component={Message} /> 
       </Tab.Navigator>
    )
}
export default Annonce;