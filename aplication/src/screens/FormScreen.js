
import React from 'react';
//import {Picker} from '@react-native-community/picker';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Item, Input, Label, Picker } from 'native-base'

export default class SavingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: undefined,
            month: undefined,
            year: undefined,

            reason: undefined,
            amount: undefined,

            //Banderas
            y : undefined
        };
    }
    changeDay(value) {
        this.setState({ day: value})
    }

    changeMonth(value) {
        this.setState({ month: value})
    }
    
    changeYear(value) {
        const val = parseInt(value, 10)
        const hel = new Date().getFullYear()

        if(val < hel && val.toString().length >= 4){
            alert("Este año no es válido")
        }
        if(val >= hel){
            this.setState({ year: val })
        }
        
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
                    <View style={styles.formdate}>
                        <Item picker>
                            <Picker
                                mode="dropdown" 
                                selectedValue={this.state.day}
                                placeholder="DD"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                style={{ width: "25%" }}
                                onValueChange={this.changeDay.bind(this)}
                            >
                                <Picker.Item label="DD" value={1}/>
                                <Picker.Item label="1" value={1} />
                                <Picker.Item label="2" value={2} />
                                <Picker.Item label="3" value={3} />
                                <Picker.Item label="4" value={4} />
                                <Picker.Item label="5" value={5} />
                                <Picker.Item label="6" value={6} />
                                <Picker.Item label="7" value={7} />
                                <Picker.Item label="8" value={8} />
                                <Picker.Item label="9" value={9} />
                                <Picker.Item label="10" value={10} />
                                <Picker.Item label="11" value={11} />
                                <Picker.Item label="12" value={12} />
                                <Picker.Item label="13" value={13} />
                                <Picker.Item label="14" value={14} />
                                <Picker.Item label="15" value={15} />
                                <Picker.Item label="16" value={16} />
                                <Picker.Item label="17" value={17} />
                                <Picker.Item label="18" value={18} />
                                <Picker.Item label="19" value={19} />
                                <Picker.Item label="20" value={20} />
                                <Picker.Item label="21" value={21} />
                                <Picker.Item label="22" value={22} />
                                <Picker.Item label="23" value={23} />
                                <Picker.Item label="24" value={24} />
                                <Picker.Item label="25" value={25} />
                                <Picker.Item label="26" value={26} />
                                <Picker.Item label="27" value={27} />
                                <Picker.Item label="28" value={28} />
                                <Picker.Item label="29" value={29} />
                                <Picker.Item label="30" value={30} />
                                <Picker.Item label="31" value={31} />
                            </Picker>
                            <Picker
                                mode="dropdown" 
                                selectedValue={this.state.month}
                                placeholder="Month"
                                placeholderStyle={{ color: "#bfc6ea" }} //#bfc6ea
                                style={{ width: "45%" }}
                                onValueChange={this.changeMonth.bind(this)}
                            >
                                <Picker.Item label="Month" value={'January'} />
                                <Picker.Item label="January" value={"January"} />
                                <Picker.Item label="February" value={"February"} />
                                <Picker.Item label="March" value={"March"} />
                                <Picker.Item label="April" value={"April"} />
                                <Picker.Item label="May" value={"May"} />
                                <Picker.Item label="June" value={"June"} />
                                <Picker.Item label="July" value={"July"} />
                                <Picker.Item label="August" value={"August"} />
                                <Picker.Item label="September" value={"September"} />
                                <Picker.Item label="October" value={"October"} />
                                <Picker.Item label="November" value={"November"} />
                                <Picker.Item label="December" value={"December"} />
                            </Picker>
                            <Item floatingLabel style={{width:'20%'}}>
                                <Label style={{padding:5, color:'black'}}> Year </Label>
                                <Input keyboardType='number-pad' maxLength={5} onChangeText={this.changeYear.bind(this)}/>
                            </Item>
                        </Item>
                        
                    </View>
                </View>
                <View>
                    <Button 
                        rounded 
                        transparent 
                        onPress={() => {this.plan()}}
                    >
                        <Text> MAKE A PLAN </Text>
                    </Button>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#5A7DB0", //#5A7DB0
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
    },
    formdate:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'80%'
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