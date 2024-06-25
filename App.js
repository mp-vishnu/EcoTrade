import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import ImageInputLayout from './app/components/ImageInputLayout';
import ListingEditScreen from './app/components/Screen/ListingEditScreen';
import ImageInputtt from './app/components/ImageInputtt';
import Screen from './app/components/Screen';

export default function App() {
  

  return (
    <View style={styles.container}>
      {/* <ListingEditScreen/> */}
     
      {/* <ImageInputLayout title="Select Image" onPress={selectImage}/>
      <Button title="Select Image" onPress={selectImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Text>hi</Text> */}
      <Screen>
      <ImageInputtt/>
      </Screen>
     
      {/* <ImageInputLayout imageUri={require("./app/assets/chair.jpg")}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    alignItems: "flex-start",
    marginTop:'3%',
    marginLeft:'3%'
   
  },
  image: {
    width: '100%',
    height: 500,
    marginTop: 20,
  },
});
