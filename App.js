import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, Dimensions } from 'react-native';
import One from './one';
import Two from './two'
import ViewImageScreen from './app/components/Screen/ViewImageScreen';
import Welcome from './app/components/Screen/Welcome';
import Appbtn from './app/components/button/Appbtn';
import Card from './app/components/Card/Card';
import ListItem from './app/components/ListItem';
import ListingDetailsScreen from './app/components/Screen/ListingDetailsScreen';
import MessageScreen from './app/components/Screen/MessageScreen';
//import AccountScreen from './app/components/Screen/AccountScreen';
import Icon from './app/components/Icon';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
console.log(useDeviceOrientation());
  return (
 //   <Welcome/>
//  <ViewImageScreen/>
//   <Appbtn title="LOGIN" onPress={()=>console.log("hic")}/> 
<View style={styles.container}>
{/* <Card
 title="Red jacket"
 subTitle="$100"
 image={require("./app/assets/jacket.jpg")}/> */}
 {/* <ListItem
 title="Red jacket"
 subTitle="$100"
 image={require("./app/assets/jacket.jpg")}/> */}
 {/* <ListingDetailsScreen/> */}
 {/* <Icon
 name="email"
 size={50}
 backgroundColor="red"
 iconColor="white" /> */}
 <ListItem title="My title" 
 subTitle={" "}
 IconComponent={<Icon name='email'/>}/>
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
