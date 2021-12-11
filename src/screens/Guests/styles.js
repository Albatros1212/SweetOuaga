import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

button:{
    borderWidth:2,
    width:30,
    height:30,
    borderRadius:15,
    borderColor:'#676767',
    justifyContent:'center',
    alignItems: 'center',
},
row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
},
});

export default styles;