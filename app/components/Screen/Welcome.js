import React from 'react'
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import Appbtn from '../button/Appbtn';
function Welcome() {
  return(
    <ImageBackground
    style={styles.background}
    source={require('../../assets/background.jpg')}>
       <View style={styles.logocontainer}>
       <Image 
        style={styles.logo}
        source={require('../../assets/logo-red.png')}>
        </Image>
        <Text style={styles.txt}>Sell What You Don't Need</Text>
       </View>
        {/* <View style={styles.lgbtn}>
        </View>
        <View style={styles.regbtn}>
        </View> */}
       <View style={styles.btncontainer}>
       <Appbtn title="LOGIN" onPress={()=>console.log("login clicked")} color="primary"/>
        <Appbtn title="REGISTER" onPress={()=>console.log("login register")} color="secondary"/>
       </View>
    </ImageBackground>
   )

 }

 const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:"center"  
    },
    logocontainer:{
        position:'absolute',
        top:85,
        alignItems:"center"
    },
    logo:{
        height:90,
        width:90
    },
    txt:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:5
    },
    btncontainer:{
        width:'100%',
        padding:20,
        margin:20,
        justifyContent:'center',
        alignItems:'center'


    },
    lgbtn:{
        backgroundColor:'#fc5c65',
        height:70,
        width:'100%'
    },
    regbtn:{
        backgroundColor:'#4ECDC4',
        height:60,
        width:'100%'
    }
 })

 export default Welcome;