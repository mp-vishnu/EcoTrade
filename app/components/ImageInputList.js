import React,{useRef} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';
function ImageInputList({imageUris=[],onRemoveImage, onAddImage}) {
    const scrollView=useRef();
   
    return (
      <ScrollView 
      ref={scrollView} 
      horizontal={true} 
      onContentSizeChange={()=> scrollView.current.scrollToEnd()}>
          <View style={styles.container}>
            {imageUris.map(uri=>(
                <View style={styles.image}>
                <ImageInput
                imageUri={uri} 
                key={uri}
                onChangeImage={()=>onRemoveImage(uri)}/>
                </View>
            ))}
            <ImageInput onChangeImage={(uri)=>onAddImage(uri)}/>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
     flexDirection:'row',
     width:'100%'
    },
    image:{
        marginRight:5,
    }
    
  });
export default ImageInputList;