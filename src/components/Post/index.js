import React from 'react';
import {Pressable, Text, Image} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native'

const days = 7

const Post = (props) => {

  const post = props.post;

  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => {navigation.navigate('Post', {post: post})}}>
      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>  ${post.newPrice} </Text>
        / night
      </Text>

      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;
