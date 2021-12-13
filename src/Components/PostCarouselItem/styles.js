import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height:120,
   padding:5,
   shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },

  innerContainer:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:10,
    overflow:'hidden',
  },
  image: {
     height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
   
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },

  description: {
    fontSize: 18,
    color:'black'
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
