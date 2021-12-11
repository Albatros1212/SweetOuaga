import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, ImageBackground, Pressable, Image, uri} from 'react-native';

import styles from './styles.js';

const Post = (props) => {

    const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image     source={{uri: post.image}}
        style={styles.image}
    
      />
      {/*Les chambre et Lits */}
      <Text style={styles.bedrooms}> {post.bed} Chambre {post.bedroom} lit Assini Mafia</Text>
      {/*Type et descriptions */}
      <Text style={styles.description}>
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
  );
};
export default Post;
