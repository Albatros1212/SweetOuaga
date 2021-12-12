import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, ImageBackground, Pressable, Image, uri, useWindowDimensions} from 'react-native';

import styles from './styles.js';

const PostCaroulselItem = (props) => {
const widht = useWindowDimensions().width;
    const post = props.post;
  return (
    <View style={[styles.container,{widht: widht - 60 }] }>
       <View style={styles.innerContainer}>
      {/* Image */}
      <Image     source={{uri: post.image}}
        style={styles.image}
    
      />
      <View style={{marginHorizontal:10}}> 
 {/*Les chambre et Lits */}
 <Text style={styles.bedrooms}> {post.bed} Chambre {post.bedroom} lit Assini Mafia</Text>
      {/*Type et descriptions */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}: {post.title}.
        
      </Text>
      {/*Les prix/ Ancien et nouveau*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / La nuit
      </Text>
      {/*Total Prix */}
      <Text style={styles.totalPrice}>${post.totalPrice}</Text>
      </View>
      </View>
    </View>
  );
};
export default PostCaroulselItem;
