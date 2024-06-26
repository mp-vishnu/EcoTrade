import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../components/Screen/AccountScreen";
import MessageScreen from "../components/Screen/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;