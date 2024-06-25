import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';
//import ImageInput from './ImageInputLayout';
import ImageInputList from './ImageInputList';
function ImageInputtt() {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd=uri=>{
    setImageUris([...imageUris,uri]);
  }
  const handleRemove=uri=>{
    setImageUris(imageUris.filter(imageUri=>imageUri!=uri));
  }
  return (
    <>
     {/* <ImageInputLayout imageUri={imageUri} onChangeImage={(imageUri)=>setImageUri(imageUri)}/> */}
    
        <ImageInputList
        imageUris={imageUris} 
         onAddImage={handleAdd}
         onRemoveImage={handleRemove}/>


     {/* <TouchableOpacity onPress={selectImage} style={styles.touchable}>
      {!imageUri && (
        <MaterialCommunityIcons 
          name="camera" 
          size={40} 
          color={colors.medium} 
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </TouchableOpacity> */}
    </>
   
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "#D8D8D8",
    borderRadius: 15,
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
});

export default ImageInputtt;
