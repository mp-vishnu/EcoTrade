import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
//import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {GestureHandlerRootView} from "react-native-gesture-handler";
function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.white}
    onPress={onPress}
    style={{borderRadius:30}}
    >
      <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:5
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;