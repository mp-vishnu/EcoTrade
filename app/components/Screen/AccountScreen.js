import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import ListItemSeparatorComponent from "../../components/lists/ListItemSeparator";
import colors from "../../config/colors";
import Icon from "../../components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    // targetScreen:"ListingEdit"
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen:"Messages"
  },
];

function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container2}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={()=>navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
     <View style={{marginTop:'15%',height:100}}>
     <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
     </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex:1
  },
  container: {
    marginVertical: 20,
    height:50
  },
  container2:{
    marginTop:'20%'
  }
});

export default AccountScreen;