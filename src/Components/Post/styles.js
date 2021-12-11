import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
     width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },

  description: {
    fontSize: 18,
    lineHeight: 26,
  },

  prices: {
    fontSize: 18,
    marginVertical:10,
  },

  price: {
    fontSize: 18,
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  newPrice: {
    fontWeight: 'bold',
    color:'green',
  },

  totalPrice:{
color:'blue',
textDecorationLine:'underline'
  },
});
export default styles;
