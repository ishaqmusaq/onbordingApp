import React,{Component} from 'react';
import {View,Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating'
import {Feather,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'

 class SinglePage  extends Component {
     constructor(props){
         super(props);
         this.state={
generalStarCount:30,
customeStarCount:3
         }

     }
onGeneralStarRating(rating){
    this.setState({
        generalStarCount:rating
    })
}

onCustomStarRating(rating){
    this.setState({
        customeStarCount:rating
    })

}

    render(){
    return(
<View style={Styles.container}>

    <View style={Styles.icons}>
    <MaterialCommunityIcons name='keyboard-backspace' size={25} color='black' style={Styles.icon1}/>

<View style={Styles.shopLike}>
    <Feather name='shopping-cart' size={25} color='#845EC2' style={Styles.icon2}/>
    <AntDesign name='hearto' size={25} color='#845EC2'  style={Styles.icon3}/>
</View>

    </View>


<Image  source={require('../assets/lea-ochel-nsRBbE6-YLs-unsplash.jpg')} style={Styles.image}/>
<View style={Styles.infoContainer}>
<Text style={Styles.header}>Black Woman Jacket </Text>

<View style={Styles.review} >
     <Text>Review : </Text>
    <StarRating 
    disabled={false}
    emptyStar='ios-start-outline'
    fullStar='ios-star'
    halfStar='ios-star-half'
    iconSet='Ionicons'
    maxStars={4}
    starSize={19}
    rating={this.state.customeStarCount}
    selectedStar={rating=>this.onCustomStarRating(rating)}
    fullStarColor='yellow'
    halfStarColor='green'
    emptyStarColor='grey'
    halfStarEnabled
    starPadding={2}

    />
    
     </View>
<View style={Styles.line}></View>
<Text style={Styles.statement}>
    it is long establish facts that a reader will be 
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
 }


const Styles=StyleSheet.create({
    container:{
        color:'#c5cad1',
paddingTop:10,
paddingHorizontal:30,
backgroundColor:'#f5f5ff'
    },
image:{
height:200,
width:250,
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
flexDirection:'row'
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
export default SinglePage;