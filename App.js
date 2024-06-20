import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, Dimensions } from 'react-native';
import One from './one';
import Two from './two'
import AppTextInput from './app/components/AppTextInput';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
console.log(useDeviceOrientation());
  return (

<View style={styles.container}>
<AppTextInput placeholder="Username" icon="email"/>
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
