import React from "react";
import { View } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native'

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = (props) => {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            navigation.navigate('Guests', {viewport: details.geometry.viewport})
          }}
          styles={{
            textInput: styles.textInput
          }}
          query={{
            key: 'AIzaSyB6hbVNmZsWNSg6_XbMvOQvutizcr9YI9A',
            language: 'en',
            types:'(cities)'
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item}/>}
          enablePoweredByContainer={false}
          fetchDetails={true}
        />
      </View>  
      
    </View>
  );
};

export default DestinationSearchScreen;
