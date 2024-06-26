import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import FeedNavigator from './app/navigation/FeedNavigator';
import AccountScreen from './app/components/Screen/AccountScreen';
import AccountNavigator from './app/navigation/AccountNavigator';

const Link = () => {
  const navigation=useNavigation();
  return(
    <Button title="Click" 
    onPress={()=>{
      navigation.navigate("TweetDetails");
    }}/>
  )
}
const Tweets = ({navigation}) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button 
      title="View tweet"
      onPress={()=>navigation.navigate("TweetDetails",{id:1})}/>
    {/* <Link/> */}
    </Screen>
  );
};

const TweetDetails = ({route}) => { // react-navigation automatically injects route to all screen components.
  // useRoute() - in child component no direct access to route.
  return (
    <Screen>
      <Text>Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle:{backgroundColor:"tomato"},
      headerTintColor:'white'
    }}>
      <Stack.Screen name="Tweets" 
      component={Tweets} 
      options={{
        headerStyle:{backgroundColor:"aqua"},
        headerTintColor:'white'
      }}/>
      <Stack.Screen name="TweetDetails" 
      component={TweetDetails} 
      options={({route})=>({title:route.params.id})}/>
    </Stack.Navigator>
  );
};

const Account=()=>{<Screen><Text>Account</Text></Screen>}
const Abc=()=>{<Screen><Text>Abc</Text></Screen>}
const Tab=createBottomTabNavigator();
const TabNavigator=()=>{
   return(<Tab.Navigator
   tabBarOptions={{
    activeBackgroundColor:"tomato",
    activeTintColor:"white",
    inactiveBackgroundColor:'orange',
    inactiveTintColor:"black"
   }}>
    <Tab.Screen name="Account" 
    component={Account}
    options={{
      tabBarIcon: ()=> <MaterialCommunityIcons name="home" size={30}/>  
    }}/>
  
    <Tab.Screen name="Abc" component={StackNavigator}/>
  </Tab.Navigator>);
}
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <StackNavigator /> */}
      {/* <TabNavigator/> */}
      <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
