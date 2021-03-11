import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base'

export default class SavingForm extends React.Component {
  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Saving Form</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#5A7DB0",
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
        borderRadius: 6,
        //backgroundColor: "#000000",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});