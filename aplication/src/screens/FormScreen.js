
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Item, Input, Label, DatePicker } from 'native-base'

export default class SavingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Saving Form </Text>
                <View style={{marginVertical:25}}>
                    <Text style={styles.question}> Why you are saving for? </Text>
                    <Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:10}}> Reason: </Label>
                        <Input/>
                    </Item>
                </View>
                <View style={{marginVertical:25}}>
                    <Text style={styles.question}> Amount of money to get </Text>
                    <Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:10}}> Wished Amount: </Label>
                        <Input/>
                    </Item>
                </View>
                <View style={{marginVertical:25}}>
                    <Text style={styles.question}> Due Date </Text>
                    <DatePicker
                        value={ new Date(2021, 4, 4) }
                        defaultDate={new Date(2021, 4, 4)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"calendar"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                        disabled={false}
                    />
                    <Text>
                        Date: {this.state.chosenDate.toString().substr(4, 12)}
                    </Text>
                </View>  
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
    },
    question: {
        color: "#20232a",
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});