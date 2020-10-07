import React from 'react';
import {View,Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

import {Feather,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'

export default function SinglePage (){
    return(
<View style={Styles.container}>

    <View style={Styles.icons}>
    <MaterialCommunityIcons name='keyboard-backspace' size={25} color='black' style={Styles.icon1}/>

<View style={Styles.shopLike}>
    <Feather name='shopping-cart' size={25} color='#845EC2' style={Styles.icon2}/>
    <AntDesign name='hearto' size={25} color='#845EC2'  style={Styles.icon3}/>
</View>

    </View>


<Image  source={require('../assets/icon.png')} style={Styles.image}/>
<View style={Styles.infoContainer}>
<Text style={Styles.header}>Red Woman Jacket </Text>
<View style={Styles.review} > <Text>Review : </Text> </View>
<View style={Styles.line}></View>
<Text style={Styles.statement}>
    it is long establish facts that a reader will be <br/>
    distracted by the readable content of a page.
</Text>
<View style={Styles.material}>
    <Text style={Styles.materialText}>material : 91% polyester , 9% elastane.</Text>
</View>

<View style={Styles.sizeContainer}>
<TouchableOpacity style={Styles.sizeButton}>
    <Text>XS</Text>
</TouchableOpacity>

<TouchableOpacity style={Styles.sizeButton}>
    <Text>S</Text>
</TouchableOpacity>

<TouchableOpacity style={Styles.sizeButton}>
    <Text>M</Text>
</TouchableOpacity>

<TouchableOpacity style={Styles.sizeButton}>
    <Text>L</Text>
</TouchableOpacity>

<TouchableOpacity style={Styles.sizeButton}>
    <Text>XL</Text>
</TouchableOpacity>


</View>
<View style={Styles.totalContainer}>
<View>
    <Text style={Styles.totalText}>Total</Text>
    <Text style={Styles.totalValue}>$99</Text>
</View>
<TouchableOpacity style={Styles.addContainer}>
    <Text style={Styles.addText}>Add to cart</Text></TouchableOpacity>
</View>




</View>
</View>
    )
}



const Styles=StyleSheet.create({
    container:{
        color:'#c5cad1',
marginTop:10,
marginHorizontal:30,
backgroundColor:'#f5f5ff'
    },
image:{

},
icons:{
    flexDirection:'row',
    marginBottom:20,
},
shopLike:{
    flexDirection:'column',
    marginLeft:250,
    
},
header:{
    fontSize:30,
    fontWeight:'bold',
},
review:{
marginBottom:7,
},
line:{
    backgroundColor:'#845EC2',
    color:'#845EC2',
    height:2.9,
    width:45,
    borderRadius:5,
    marginBottom:30,
    marginRight:10,
},
statement:{
    marginTop:20,
    lineHeight:30,
    fontWeight:'light'
    
},
material:{
    backgroundColor:'#fff',
    borderEndColor:'#CBCAD9',
    padding:12,
},
materialText:{
    color:'#845EC2',
    
},
sizeContainer:{
    flexDirection:'row',
    padding:10,
    borderRadius:15,
    margin:12,
},
sizeButton:{
padding:5,
backgroundColor:'#fff',
borderRadius:10,
marginRight:10,


},
icon1:{
backgroundColor:'#fff',
borderRadius:10,

},
icon2:{
    marginBottom:15,
    borderRadius:10,
    backgroundColor:'#fff',
},
icon3:{
    borderRadius:10,
    backgroundColor:'#fff',
},

addContainer:{
    backgroundColor:'#fff',
borderRadius:10,
paddingHorizontal:12,
backgroundColor:'#2b39d6',
alignSelf:'center',
marginLeft:150,
padding:10,
},

totalContainer:{
    backgroundColor:'#9370DB',
    borderRadius:5,
    flexDirection:'row',
    padding:10,
},
totalText:{
    color:'#fff'
},
totalValue:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
},
addText:{
    color:'#fff',
    fontSize:12,
    fontWeight:'bold',
}

})