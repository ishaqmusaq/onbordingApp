
import React from 'react';
import onlineShopping from '../assets/onlineShopping.png';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons'

export default function OnlineShoppingScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>ONLINE SHOPPING</Text>

      <Text  style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
    
    <View style={styles.imageContainer}>
      <Image source={onlineShopping} size={20} style={styles.image}/>
</View>


<TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.button}>Next</Text>
</TouchableOpacity>



<View>
    <Entypo
    name='dots-three-horizontal'
    size={40}
    color='#845EC2'
    style={styles.icon}
    />
    <Text style={styles.skip}>Skip</Text>
</View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },


  header:{
fontSize:20,
fontWeight:"bold",
marginBottom:30,
  },


  button:{
      Color:"#fff",
fontWeight:"bold",
marginVertical:15,
      
      fontSize:20,
  },
  buttonContainer:{
     alignItems:"center",
     backgroundColor:"#9370DB",
     marginHorizontal:70,
     borderRadius:30,
  },


  image:{
width:300,
height:300,
marginVertical:30,
  },

  icon:{
marginLeft:140,
marginTop:10,
  },


  skip:{
marginTop:-25,
color:"#69686A",
fontSize:16,
alignSelf:'flex-end',
  },


  text:{
      fontSize:16,
      color:"grey",
      lineHeight:25,
  }
});
