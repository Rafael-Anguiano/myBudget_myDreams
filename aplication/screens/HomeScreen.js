import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text } from 'native-base'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reason: undefined,
            amount: undefined,
            choosenDate: undefined,
            //StrtDate
            strtDay: undefined,
            strtMonth: undefined,
            strtYear: undefined,
            //DueDate
            dueDay: undefined,
            dueMonth: undefined,
            dueYear: undefined,
            // Per Fortnight
            fortnights: 0,
            biweeklyPay: undefined,
            calculated: false
        };
    }

    render (){    
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Home Screen </Text>
                <Text style={styles.question}> Hello World </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: "white", //#596997
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
        borderRadius: 6,
        color: "#051d5f",   //#20232a
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    question: {
        //color: "#FFFFFF",   //#20232a
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});