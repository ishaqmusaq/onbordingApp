import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';




export default function Ecomence ({name,price,image}){


    return(
<View  style={styles.container}>
<View style={styles.subContainer}>

<Image source={image} style={styles.imageContainer} siz={25}/>
       <View style={styles.infoContainer}>
           <Text style={styles.names} numberOfLines={1}> {name}</Text>
           <Text style={styles.infoDetails}>{price}</Text>
     <View style={styles.imageIconsContainer}>
<Image  style={styles.imageIcons} source={require('../assets/splash.png')}/>
<Image  style={styles.imageIcons} source={require('../assets/splash.png')}/>

     </View>


</View>

</View>

</View>


    )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subContainer:{
      margin:50,
    },
    
    names:{
color:'black',
    },

    imageContainer:{

    },
    infoContainer:{

    },
    infoDetails:{
      color:"#845EC2"
    },

    
  });