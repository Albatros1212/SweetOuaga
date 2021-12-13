import React, {useState, useEffect, useRef} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {FlatList} from 'react-native-gesture-handler';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import feed from '../../../assets/data/feed';
import CustomMarker from '../../Components/CustomMarker';
import PostCaroulselItem from '../../Components/PostCarouselItem/Index';

const SearchResultsMap = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatList = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold:70})
  const map = useRef();

  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length >0) {
    const selectedPlace = viewableItems[0].item;
    setSelectedPlaceId(selectedPlace.id)
    }
  })
 

  useEffect(   () =>{
    if (!selectedPlaceId || !flatList){
      return;
    }
    
const index = feed.findIndex(feeds => feeds.id === selectedPlaceId)
flatList.current.scrollToIndex({index:index})

const selectedPlace = feed[index];
const region ={
  latitude: selectedPlace.coordinate.latitude,
  longitude: selectedPlace.coordinate.longitude,
  latitudeDelta: 0.8,
  longitudeDelta: 0.8,
}
     map.current.animateToRegion(region)
  }, [selectedPlaceId])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
      ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 46.813878,
          longitude: -71.207981,
          //latitude: 28.3279822,
          //longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {feed.map(feed => (
          <CustomMarker
            coordinate={feed.coordinate}
            price={feed.newPrice}
            isSelected={feed.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(feed.id)}
          />
        ))}

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
      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
        ref={flatList}
          data={feed}
          renderItem={({item}) => <PostCaroulselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width-60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
