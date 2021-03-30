import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import DetailedPost from '../../components/DetailedPost'
import {useRoute} from '@react-navigation/native'

//const post = places[0];

const PostScreen = (props) => {
  const route = useRoute()
  return (
    <DetailedPost post={route.params.post} />
  );
};

export default PostScreen;
