import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../components/Screen/ListingsScreen';
import ListingDetailsScreen from '../components/Screen/ListingDetailsScreen';
import routes from "./routes";
const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;