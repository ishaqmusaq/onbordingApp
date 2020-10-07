import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';




export default function Ecomence ({name,price,image}){


    return(
<View  style={styles.container}>
<View style={styles.subContainer}>

<Image source={image} style={styles.imageContainer} siz={25}/>
       <View style={styles.infoContainer}>
           <Text style={styles.names} numberOfLines={1}> {name}</Text>

           <View style={styles.imageIconsContainer}>
<Image  style={styles.imageIcons} source={require('../assets/rating.png')}/>


     </View>
           <Text style={styles.infoDetails}>{price}</Text>
     


</View>

</View>

</View>


    )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#f5f5ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subContainer:{
      margin:50,
      flexDirection:'row'
    },
    
    names:{
color:'black',
    },

    imageContainer:{

    },
    imageIcons:{
      height:15,
      width:100,
    },
    infoContainer:{

    },
    infoDetails:{
      color:"#845EC2"
    },

    
  });