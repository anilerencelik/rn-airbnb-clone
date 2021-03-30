import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import { Auth } from 'aws-amplify';


const ProfileScreen = (props) => {

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => Auth.signOut()}>
        <Text style={styles.buttonText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
