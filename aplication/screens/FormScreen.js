
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class SavingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reason: undefined,
            amount: undefined,
            isVisible: false,
            choosenDate: undefined,
            color: 'gray',
            day: new Date().getDate(),
            month: new Date().getMonth() +1,
            year: new Date().getFullYear()
        };
    }
    
    async componentDidMount(){
        await this.setState({
            day: new Date().getDate(), 
            month: new Date().getMonth() +1, 
            year: new Date().getFullYear()
        })
    }
    
    handlePicker = (datetime) => {
        this.setState({ 
            isVisible: false,
            choosenDate: moment(datetime).format('MM/DD/YYYY'),
            color:'white'
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
        const {navigation} = this.props
        navigation.navigate('Plan', { 
            reason:this.state.reason, 
            amount:this.state.amount,
            strtDay: this.state.day,
            strtMonth: this.state.month,
            strtYear: this.state.year,
            choosenDate: this.state.choosenDate 
        })
    }

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Saving Form </Text>
                
                <View style={{marginVertical:25}}>
                    <Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:13, color:'white'}}> Reason: </Label>
                        <Input onChangeText={(text) => {this.changeInput(text, 'reason')}}>
                            <Text style={{color:'white'}}> </Text>
                        </Input>
                    </Item>
                </View>
                
                <View style={{marginVertical:25}}>
                    <Item floatingLabel style={{width:'80%'}}>
                        <Label style={{padding:13, color:'white'}}> Wished Amount: </Label>
                        <Input 
                            textContentType='postalCode' 
                            maxLength={11}  
                            keyboardType='number-pad'
                            onChangeText={(text) => {this.changeInput(text, 'amount')}}
                        >
                            <Text style={{color:'white'}}>$ </Text>
                        </Input>
                    </Item>
                </View>
                
                <View style={{marginVertical:25}}>
                    <Button bordered rounded light onPress={this.showPicker}>
                        <Text style={{color: this.state.color, fontSize:15, fontWeight:'bold'}}>{this.state.choosenDate ? this.state.choosenDate : "Select your Due Date" }</Text>
                    </Button>
                </View>

                <View>
                    <Button 
                        rounded 
                        info
                        onPress={() => {this.plan()}}
                        style={{backgroundColor: '#051d5f'}}
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
        color: "#051d5f",   //#20232a
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