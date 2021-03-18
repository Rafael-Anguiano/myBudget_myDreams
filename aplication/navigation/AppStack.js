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

const Stack = createStackNavigator();
 
export default class AppStack extends React.Component {
  render (){
    return (
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" options={{headerShown: false}}>
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

        </Stack.Navigator>
    )
  }
}