import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import feed from '../../../assets/data/feed';
import CustomMarker from '../../Components/CustomMarker';

const SearchResultsMap = props => {
  const[SelectedPlaceId, seSelectedPlaceId] = useState(null);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
         latitude: 46.813878 ,
        longitude: -71.207981,
       //latitude: 28.3279822,
       //longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
        >
          {feed.map(feed => (   
          <CustomMarker 
          coordinate={feed.coordinate} 
          price={feed.newPrice} isSelected={feed.id === SelectedPlaceId} 
          onPress={() => seSelectedPlaceId(feed.id)}
          
          /> ))}
          

        {/* <Marker coordinate={{  latitude: 46.813878 ,
        longitude: -71.207981,}} > 
        <View style={{backgroundColor:'white',
      padding:5, borderRadius:20, 
      borderWidth:1}}>
          <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>$300</Text>
        </View>
        
        </Marker>
 */}
        
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
