import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, Dimensions, Switch } from 'react-native';
import One from './one';
import Two from './two'
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import AccountScreen from './app/components/Screen/AccountScreen';
import LoginScreen from './app/components/Screen/loginScreen';
import RegisterScreen from './app/components/Screen/RegisterScreen';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';

const categories=[
  {label:"Furniture",value:1},
  {label:"Clothing",value:2},
  {label:"Cameras",value:3},
];
export default function App() {
console.log(useDeviceOrientation());
const [isNew,setIsNew]=useState(false);
const  [category,setCategory]=useState()
  return (

<View style={styles.container}>
{/* <AccountScreen/> */}
<RegisterScreen/>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  backgroundColor: '#f8f4f4',
  paddingTop:'18%'
  },
});
