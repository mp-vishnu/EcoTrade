import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../components/Screen/Welcome';
import LoginScreen from '../components/Screen/LoginScreen';
import RegisterScreen from '../components/Screen/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
    <Stack.Screen name="Welcome" 
    component={Welcome}
    options={{headerShown:false}}
    />
    <Stack.Screen name="Login" 
    options={{
        headerTintColor: 'red'
    }}
    component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
  </Stack.Navigator>
)
  


export default AuthNavigator;