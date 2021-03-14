
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class SavingPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strtDay: undefined,
            strtMonth: undefined,
            strtYear: undefined,

            reason: undefined,
            amount: undefined,

            isVisible: false,
            choosenDate: undefined,
        };
    }

    componentDidMount(){
        this.setState({
            strtDay: this.props.route.params.strtDay,
            strtMonth: this.props.route.params.strtMonth,
            strtYear: this.props.route.params.strtYear,
            reason: this.props.route.params.reason,
            amount: this.props.route.params.amount,
            choosenDate: this.props.route.params.choosenDate,
        })
    }

    

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.question}> Saving Plan </Text>
                <Text style={styles.question}> {this.state.strtDay} </Text>
                <Text style={styles.question}> {this.state.strtMonth} </Text>
                <Text style={styles.question}> {this.state.strtYear} </Text>
                <Text style={styles.question}> {this.state.reason} </Text>
                <Text style={styles.question}> {this.state.amount} </Text>
                <Text style={styles.question}> {this.state.choosenDate} </Text>
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