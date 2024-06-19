import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, Dimensions } from 'react-native';

export default function Two(){
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
      <View style={styles.v1}>
      </View>
      <View style={styles.v2}>
      </View>
      <View style={styles.v3}>
      </View>
      <View style={styles.v4}>
      </View>
      <View style={styles.v5}>
      </View>
      <View style={styles.v6}>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  view1:{
    backgroundColor:'aqua',
    height:'50%',
    width:'100%',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"center",
    flexWrap:'wrap',
    alignContent:'center'
  },
  v1:{
    height:300,
    width:100,
    backgroundColor:'orange',
  },
  v2:{
    height:100,
    width:100,
    backgroundColor:'red',
    alignSelf:'flex-start'
  },
  v3:{
    height:100,
    width:100,
    backgroundColor:'green'
  },
  v4:{
    height:100,
    width:100,
    backgroundColor:'blue',
    alignSelf:'flex-start'
  },
  v5:{
    height:100,
    width:100,
    backgroundColor:'orange',
  },
  v6:{
    height:100,
    width:100,
    backgroundColor:'red',
    
  }
  });
  