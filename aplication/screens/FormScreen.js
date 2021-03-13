
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class SavingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: undefined,
            month: undefined,
            year: undefined,

            reason: undefined,
            amount: undefined,

            isVisible: false,
            choosenDate: undefined,

            color: 'gray'
        };
    }

    handlePicker = (datetime) => {
        this.setState({ 
            isVisible: false,
            choosenDate: moment(datetime).format('MM/DD/YYYY'),
            color:'black'
        })
    }

    hidePicker = () => {
        this.setState({ isVisible: false })
    }

    showPicker = () => {
        this.setState({ isVisible: true })
    }
    
    changeInput(value, param){
        if(param == 'amount'){
            this.setState({amount: value})
        }
        if(param == 'reason'){
            this.setState({reason: value})
        }
    }

    plan(){
        console.log(this.state)
    }

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Saving Form </Text>
                <View style={{marginVertical:25}}>
                    <Text style={styles.question}> Why you are saving for? </Text>
                    <Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:10, color:'black'}}> Reason: </Label>
                        <Input onChangeText={(text) => {this.changeInput(text, 'reason')}} />
                    </Item>
                </View>
                <View style={{marginVertical:25}}>
                    <Text style={styles.question}> Amount of money to get </Text>
                    <Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:10, color:'black'}}> Wished Amount: </Label>
                        <Input 
                            textContentType='postalCode' 
                            maxLength={9}  
                            keyboardType='number-pad'
                            onChangeText={(text) => {this.changeInput(text, 'amount')}}
                        />
                    </Item>
                </View>
                <View style={{marginVertical:25}}>
                    <Text style={styles.question}> Due Date </Text>
                    <Button transparent rounded onPress={this.showPicker}>
                        <Text style={{color: this.state.color, fontSize:15}}>{this.state.choosenDate ? this.state.choosenDate : "Select a Date" }</Text>
                    </Button>
                </View>
                <View>
                    <Button 
                        rounded 
                        info
                        onPress={() => {this.plan()}}
                    >
                        <Text style={{color:'white', fontSize:15}}> MAKE A PLAN </Text>
                    </Button>
                </View>

                <DateTimePickerModal
                    isVisible={this.state.isVisible}
                    mode="date"
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    minimumDate={new Date()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#596997", //#5A7DB0
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
        borderRadius: 6,
        //backgroundColor: "#000000",
        color: "#FFFFFF",   //#20232a
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    question: {
        color: "#FFFFFF",   //#20232a
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
/*

<Item floatingLabel style={{width:'30%'}}>
                            <Label style={{padding:10}}> YYYY </Label>
                            <Input/>
                        </Item>




constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }


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






<Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:10, color:'black'}}> Wished Amount: </Label>
                        <Input textContentType='postalCode' keyboardType='number-pad'/>
                    </Item>



<TextInputMask
                        onChangeText={(formatted, extracted) => {
                            console.log(formatted) // +1 (123) 456-78-90
                            console.log(extracted) // 1234567890
                        }}
                        mask={"$ [999999990].[99]"}
                    />
                    */