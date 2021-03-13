/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SavingForm from './aplication/screens/FormScreen'
import SavingPlan from './aplication/screens/PlanScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        rsn: undefined,
        amnt: undefined,
        strtdy: undefined,
        strtmnth: undefined,
        strtyr: undefined
    };
  }

  setParams( reason, amount, strtday, strtmonth, strtyear ){
    this.setState({ rsn: reason, amnt: amount, strtdy: strtday, strtmnth: strtmonth, strtyr: strtyear })
  }

  render (){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" options={{headerShown: false}}>
            {props => <SavingForm {...props} setParams={this.setParams} />}
          </Stack.Screen>
          <Stack.Screen name="Plan" options={{headerShown: false}}>
            {props => <SavingPlan {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}