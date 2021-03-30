import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    margin: 20,
    backgroundColor: '#ff2626'
  },
  buttonText: {
    paddingVertical: 20,
    color: '#f6f6f6'
  }
});

export default styles;
