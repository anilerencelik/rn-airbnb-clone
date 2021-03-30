import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles'

const CustomMarker = (props) => {
  const {price, coordinate, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={[styles.markerView, isSelected === true ? styles.selectedMarkerView: {}]}>
        <Text style={[styles.markerText, isSelected === true ? styles.selectedMarkerText: {}]}> 
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
