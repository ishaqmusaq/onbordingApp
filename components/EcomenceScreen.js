import React from 'react';
import {View,StyleSheet,FlatList,Text,TextInput, TouchableOpacity} from 'react-native';
import Ecomence from './Ecomence';
import {Feather,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'


export default function EcomenceScreen (){
    const ecomence=[
        {name:'Bike jachet softshell Warm', price:'$99',image:require('../assets/favicon.png')},
        {name:'PINK HOODY MAARIN', price:'$89',image:require('../assets/favicon.png')},
        {name:'Hooded jacket classic ', price:'$79',image:require('../assets/icon.png')}

    ]


    return(
      <View style={styles.bigContainer}>


<View style={styles.iconsContainer}>

<MaterialCommunityIcons name='keyboard-backspace' size={25} color='black' style={styles.icon1}/>

<Feather  name='shopping-cart' size={25} color='#845EC2' style={styles.icon2} />

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


</View>


    )
}


const styles = StyleSheet.create({
  bigContainer:{

  },
    bigContainer: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    header:{
      fontSize:15,
      fontWeight:'bold',
      alignSelf:'flex-start',
      fontStyle:'',
    },
    filterContainer:{},
    filterText:{
      color:'#845EC2'
    },
    input:{
      flexDirection:'row',
      borderRadius:25,
      backgroundColor:'#fff',
      margin:20,
      borderColor:"grey",
    },
    iconsContainer:{
      flexDirection:'row',
      marginBottom:25,
      border:'none',
      color:'#fff',
    },
    icon2:{
      marginLeft:140,
    }
  });