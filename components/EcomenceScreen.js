import React from 'react';
import {ScrollView,View,StyleSheet,FlatList,Text,TextInput, TouchableOpacity} from 'react-native';
import Ecomence from './Ecomence';
import {Feather,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'


export default function EcomenceScreen (){
    const ecomence=[
        {name:'Bike jachet softshell Warm', price:'$99',image:require('../assets/shirt.png')},
        {name:'PINK HOODY MAARIN', price:'$89',image:require('../assets/favicon.png')},
        {name:'Hooded jacket classic ', price:'$79',image:require('../assets/favicon.png')}

    ]


    return(
      <ScrollView style={styles.bigContainer}>


<View style={styles.iconsContainer}>

  <MaterialCommunityIcons name='keyboard-backspace' size={25} color='black' style={styles.icon1}/>
   <View style={styles.icon2} >
    <Feather  name='shopping-cart' size={25} color='#845EC2' />
  </View>
</View>


<Text style={styles.header}>Woman jacket</Text>

<View style={styles.input}>
<TextInput placeholder='Search jacket' />
<TouchableOpacity style={styles.filterContainer}>
  <Text style={styles.filterText}>Filter</Text>
</TouchableOpacity>
</View>


<View  style={styles.container}>

<FlatList 

     data={ecomence}
       renderItem={({item})=>{
    return <Ecomence name={item.name} price={item.price}  image={item.image}  
    
    />
    
}}

keyExtractor={(item)=>item.price}
/>


</View>


</ScrollView>


    )
}


const styles = StyleSheet.create({
  bigContainer:{
    color:'#c5cad1',
    paddingTop:10,
    paddingHorizontal:30,
    backgroundColor:'#f5f5ff'
  },
    
    header:{
      fontSize:15,
      fontWeight:'bold',
      alignSelf:'flex-start',
      
    },
    filterContainer:{},
    filterText:{
      color:'#845EC2',
      marginLeft:120,
    },
    input:{
      flexDirection:'row',
      borderRadius:25,
      backgroundColor:'#fff',
      margin:20,
      borderColor:"grey",
      padding:12,
    },
    iconsContainer:{
      marginTop:30,
      flexDirection:'row',
      marginBottom:25,
      // backgroundColor:'#000',
      justifyContent:'space-between'
      
    },
    icon2:{

    }
  });