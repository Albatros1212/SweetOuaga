import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, ImageBackground, ScrollView, Image, uri} from 'react-native';

import styles from './styles.js';

const DetailedPost = (props) => {

    const post = props.post;
  return (
    <ScrollView>
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
      <Text style={{fontSize:20, fontWeight:'bold',}}> Description</Text>
      <Text > {post.description}</Text>
    </View>
    </ScrollView>
  );
};
export default DetailedPost;
