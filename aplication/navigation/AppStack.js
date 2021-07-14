/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SavingForm from '../screens/FormScreen'
import SavingPlan from '../screens/PlanScreen'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {Button, Text, Icon} from 'native-base'
import SavingForm2 from '../screens/FormScreen2';
import SavingPlan2 from '../screens/PlanScreen2';

const Stack = createStackNavigator();

export default class AppStack extends React.Component {
  render (){
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            options={({ navigation }) => ({
              headerShown: true, 
              headerTintColor:'white',
              headerStyle: { backgroundColor: '#051d5f'},
              headerRight: () => (
                <Button
                  onPress={() => {navigation.navigate('Form')}}
                  transparent
                  rounded
                  style={{backgroundColor:'#051d5f'}}
                >
                  <Text style={{fontWeight:'bold', color:'white'}}>
                    <Icon name='build' style={{color:'white'}}/>
                  </Text>
                </Button>
              )
            })}
          >
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
          
          <Stack.Screen 
            name="Form" 
            options={{
              headerShown: true, 
              headerTintColor:'white',
              headerStyle: { backgroundColor: '#051d5f'}
            }}
          >
            {props => <SavingForm {...props} />}
          </Stack.Screen>
           
          <Stack.Screen 
            name="Plan" 
            options={{
              headerShown: true, 
              headerTintColor:'white',
              headerStyle: { backgroundColor: '#051d5f'}
            }}
          >
            {props => <SavingPlan {...props} />}
          </Stack.Screen>

          <Stack.Screen 
            name="Form2" 
            options={{
              headerShown: true, 
              headerTintColor:'white',
              headerStyle: { backgroundColor: '#051d5f'}
            }}
          >
            {props => <SavingForm2 {...props} />}
          </Stack.Screen>

          <Stack.Screen 
            name="Plan2" 
            options={{
              headerShown: true, 
              headerTintColor:'white',
              headerStyle: { backgroundColor: '#051d5f'}
            }}
          >
            {props => <SavingPlan2 {...props} />}
          </Stack.Screen>

        </Stack.Navigator>
    )
  }
}

/*
import firebase from '@firebase/app'; 
import "firebase/firestore";


const Stack = createStackNavigator();

var firebaseConfig = {
  apiKey: "AIzaSyAVkAz1aFrKefLQO3bctFjFx3dB98S6Bfw",
  authDomain: "mybudget-mydreams.firebaseapp.com",
  projectId: "mybudget-mydreams",
  storageBucket: "mybudget-mydreams.appspot.com",
  messagingSenderId: "108872851331",
  appId: "1:108872851331:web:968c5db21788f8595e60b6"
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();
const consulta = DB.collection('Plan').doc('rwe9MslWjeKrihnTneVC')

*/