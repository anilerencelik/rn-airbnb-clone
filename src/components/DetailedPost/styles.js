import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedrooms: {
    fontSize: 14,
    marginVertical: 5,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  prices: {
    fontSize: 18,
    marginVertical: 5,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  longDescription: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 18,
  }
});

export default styles;
