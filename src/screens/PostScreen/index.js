import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {View, Text, ImageBackground, Pressable, Image, uri, useWindowDimensions} from 'react-native';
import feed from "../../../assets/data/feed";
import DetailedPost from "../../Components/DetailedPost/Index";



const PostScreen = (props) => {
    const route = useRoute();

    const post = feed.find(feeds => feeds.id === route.params.postId);
    return(
        <View  style={{backgroundColor:'white'}}>
           <DetailedPost post={post}/>
        </View>
    )
}
export default PostScreen;