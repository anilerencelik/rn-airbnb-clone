import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    justifyContent:'space-between'
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  nextButton:{
    alignItems:'center',
    justifyContent:'center',
    height:40,
    marginVertical: 30,
    backgroundColor: '#f15454',
    borderRadius: 10,
    marginHorizontal:10
  }
});

export default styles;
