import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%'
  },
  markerView:{
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth:1
  },
  markerText:{
    fontWeight:'bold'
  },
  carouselContainer:{
    position:'absolute',
    bottom:0
  }
});

export default styles;
