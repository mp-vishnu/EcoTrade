import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, Dimensions, Switch } from 'react-native';
import One from './one';
import Two from './two'
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import AccountScreen from './app/components/Screen/AccountScreen';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
console.log(useDeviceOrientation());
const [isNew,setIsNew]=useState(false);
  return (

<View style={styles.container}>
{/* <AccountScreen/> */}
<AppPicker icon="apps" placeholder="category"/>
{/* <AppTextInput placeholder="email" icon="email" /> */}
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
