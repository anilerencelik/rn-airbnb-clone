import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  },
  innerContainer:{
    flexDirection: 'row',
    backgroundColor: '#efefef',
    borderRadius: 10,
    overflow:'hidden'
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
    fontSize:9
  },
  description: {
    fontSize: 10,    
  },
  prices: {
    fontSize: 12,
    marginVertical: 10,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'black'
  },
});

export default styles;
