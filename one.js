import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, Dimensions } from 'react-native';
export default function One(){
    console.log(Dimensions.get("screen"));
  console.log(Dimensions.get("window"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>hi hi hi HU HU HU lk</Text>
      <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
      {/* <Image source={{
        height:300,
        width:300,
        uri:"https://picsum.photos/200/300"
      }}/> */}
      <TouchableWithoutFeedback onPress={()=>console.log('TAPPED')}>
      <Image source={require("./app/assets/splash.png")} style={styles.img}/>
      </TouchableWithoutFeedback>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <StatusBar style="auto" />
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
    img:{
      height:500,
      width:500
    }
  });
  