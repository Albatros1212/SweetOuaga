import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card, Button, ThemeContext} from 'react-native-elements';

import {connect} from 'react-redux';


const Town = props => {
    const {theme} = useContext(ThemeContext);
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      viewText: {
        flex: 0.65,
        justifyContent: 'center',
      },
      text: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    });
  
    return (
      <Card>
        <View>
          <Text> {props.name}  </Text>
        </View>
      </Card>
    );
  };

 
  
  export default connect()(Town);