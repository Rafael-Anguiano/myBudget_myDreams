  
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SingupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default class AuthStack extends React.Component {
  render (){
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    );
  };
}
