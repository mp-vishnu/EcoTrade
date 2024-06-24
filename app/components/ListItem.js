import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
//import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {GestureHandlerRootView} from "react-native-gesture-handler";
function ListItem({ title, subTitle, image, onPress,IconComponent, renderRightActions }) {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.white}
    onPress={onPress}
    style={{borderRadius:30}}
    >
      <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
       {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      <MaterialCommunityIcons
            name="chevron-right"
            color="black"
            size={25}
          />
    </View>
    </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;