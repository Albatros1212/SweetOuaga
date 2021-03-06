import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../../screens/SearchResults';
import SearchResultsMap from '../../screens/SearchResultsMaps';



const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) =>{
    return(
       <Tab.Navigator >
           <Tab.Screen name={'Liste'} component={SearchResults} /> 
           <Tab.Screen name={'Carte'} component={SearchResultsMap} /> 
       </Tab.Navigator>
    )
}
export default SearchResultsTabNavigator;