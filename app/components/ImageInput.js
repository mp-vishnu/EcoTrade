import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';

//import Image from './ImageInput';

function ImageInput({imageUri,onChangeImage}) {

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

 
  const source = typeof imageUri === 'string' ? { uri: imageUri } : imageUri;
  // const handleAddImage = (uri) => {
  //   setImageUri(uri);
  // };
  const handlePress=()=>{
    if (!imageUri) selectImage();
    else Alert.alert('Delete','Sure???',[
    {text:'Yes',onPress:()=>onChangeImage(null)},
    {text:'No'}
    ]);
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        onChangeImage(result.assets[0].uri);
       // onImageSelect(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image: ", error);
    }
  };
  return (
   <View style={styles.mainContainer}>
     <TouchableWithoutFeedback onPress={handlePress} >
      <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons 
          name="camera" 
          size={40} 
          color={colors.medium} 
        />
      )}
      {imageUri && <Image 
      source={source} 
      onImageSelect={onChangeImage} 
      style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
   height:97,
   width:100,
    backgroundColor:"#D8D8D8",
    alignItems:"center",
    justifyContent:'center',
    borderRadius:17
  },
  mainContainer:{
    //justifyContent:'flex-start',
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 5,
  },
});

export default ImageInput;