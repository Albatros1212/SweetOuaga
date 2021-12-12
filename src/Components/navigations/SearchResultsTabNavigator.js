import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../../screens/SearchResults';



const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) =>{
    return(
       <Tab.Navigator Tab>
           <Tab.Screen name={'Liste'} component={SearchResults} /> 
           <Tab.Screen name={'Carte'} component={SearchResults} /> 
       </Tab.Navigator>
    )
}
export default SearchResultsTabNavigator;