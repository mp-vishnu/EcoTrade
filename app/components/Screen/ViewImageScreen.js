import React from "react";
import { Image, StyleSheet,View } from "react-native";
function ViewImageScreen(){
    return(
      <View style={styles.container}>
        <View style={styles.closeicon}></View>
        <View style={styles.deleteicon}></View>
          <Image 
        style={styles.image}
        source={require('../../assets/chair.jpg')}>
        </Image>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
    },
    closeicon:{
        height:45,
        width:45,
        backgroundColor:'#fc5c65',
        position:'absolute',
        top:65,
        left:20
    }, 
    deleteicon:{
        height:45,
        width:45,
        backgroundColor:'#4ecdc4',
        position:'absolute',
        top:65,
        right:20
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    }
})
export default ViewImageScreen;