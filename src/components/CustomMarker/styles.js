import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  markerView:{
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth:1
  },
  selectedMarkerView:{
    backgroundColor: 'black'
  },
  markerText:{
    color:'black',
    fontWeight:'bold'
  },
  selectedMarkerText:{
    color:'white'
  }
});

export default styles;
