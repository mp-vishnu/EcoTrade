import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return (
  
      <View style={[styles.view,styles.screen, style]}>{children}</View>
 
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop:"10%",
   
  },
  view: {
    flex: 1,
  },
});

export default Screen;