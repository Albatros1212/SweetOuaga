import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Icon, Button, ThemeContext, FAB, Card} from 'react-native-elements';

import ListTown from '../../Components/Towns/ListTown';


const TownScreen = () => {
    const {theme} = useContext(ThemeContext);
    const [addVisible, setAddVisible] = useState(false);

    const toggleAddOverlay = () => {
      setAddVisible(!addVisible);
    };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ListTown/> 
  
    </ScrollView>
    </SafeAreaView>
  );
};

export default TownScreen;
