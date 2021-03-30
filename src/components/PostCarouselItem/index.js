import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native'

const PostCarouselItem = (props) => {

  const navigation = useNavigation();
  const {post} = props;
  const width = useWindowDimensions().width

  return (
    <Pressable 
      style={[styles.container, {width:width-60}]} 
      onPress={() => {navigation.navigate('Post', {post: post})}}
      onLongPress={() => props.set(post.id)}
    >
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        <View style={{flex:1, marginHorizontal:10}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

        
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          
          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice} </Text>/ night
          </Text>

        </View>
      </View>  
    </Pressable>
  );
};

export default PostCarouselItem;
