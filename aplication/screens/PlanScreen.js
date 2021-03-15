
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base'
import { months } from 'moment';

export default class SavingPlan extends React.Component {
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

    async componentDidMount(){
        await this.setState({
            strtDay: this.props.route.params.strtDay,
            strtMonth: this.props.route.params.strtMonth,
            strtYear: this.props.route.params.strtYear,
            reason: this.props.route.params.reason,
            amount: this.props.route.params.amount,
            choosenDate: this.props.route.params.choosenDate
        })
        this.setPlan()

        this.payments()
    }

    setPlan(){
        let strtDay = this.state.strtDay
        let strtMonth = this.state.strtMonth
        let strtYear = this.state.strtYear
        
        let array = this.state.choosenDate.split(["/"])

        let DueDay = Number(array[1])
        let DueMonth = Number(array[0])   
        let DueYear = Number(array[2])

        this.setState({ 
            dueDay: DueDay, 
            dueMonth: DueMonth, 
            dueYear: DueYear 
        })

        //Defining the Term
        let term = undefined
        if(strtYear == DueYear && strtMonth == DueMonth){
            term = "short"
        }
        if(strtYear == DueYear && strtMonth != DueMonth){
            term = "medium"
        }
        if(strtYear < DueYear){
            term = "long"
        }

        // First Step
        if(term == 'short'){
            this.sameMonth(strtDay, DueDay, DueMonth)
        }else{
            // First Step
            if(strtDay <= 15){
                this.setState({ fortnights: this.state.fortnights +2 })
            }else{
                this.setState({ fortnights: this.state.fortnights + 1})
            }
            //Second Step
            strtMonth = strtMonth +1
            
            this.secondStep(strtDay, strtMonth, strtYear, DueDay, DueMonth, DueYear, term)
        }        
    }
    
    sameMonth(strtDay, dueDay, dueMonth){
        // February
        if( dueMonth == 2 ){
            if(dueDay < 15){
                this.setState({fortnights: this.state.fortnights +0 })
            }else{
                if( dueDay < 28 ){
                    this.setState({ fortnights: this.state.fortnights +1})
                }else{
                    if( 15 < strtDay ){
                        this.setState({ fortnights: this.state.fortnights +1})
                    }else{
                        this.setState({ fortnights: this.state.fortnights +2})
                    }
                }
            }
        }
        // 30 Days
        if( dueMonth == 4 || dueMonth == 6 || 
            dueMonth == 9 || dueMonth == 11 
        ){

            if(dueDay < 15){
                this.setState({fortnights: this.state.fortnights +0 })
            }else{
                if(dueDay < 30){
                    this.setState({ fortnights: this.state.fortnights +1})
                }else{
                    if( 15 < strtDay ){
                        this.setState({ fortnights: this.state.fortnights +1})
                    }else{
                        this.setState({ fortnights: this.state.fortnights +2})
                    }
                }
            }
        }
        // 31 Days
        if( dueMonth == 1 || dueMonth == 3 ||
            dueMonth == 5 || dueMonth == 7 || 
            dueMonth == 8 || dueMonth == 10 ||
            dueMonth == 12 
        ){
            if(dueDay < 15){
                this.setState({fortnights: this.state.fortnights +0 })
            }else{
                if(dueDay < 31){
                    this.setState({ fortnights: this.state.fortnights +1})
                }else{
                    if( 15 < strtDay ){
                        this.setState({ fortnights: this.state.fortnights +1})
                    }else{
                        this.setState({ fortnights: this.state.fortnights +2})
                    }
                }
            }
        }
    }

    secondStep(strtDay, strtMonth, strtYear, dueDay, dueMonth, dueYear, term){
        if(term == 'medium'){
            while(strtMonth <= dueMonth){
                if(strtMonth<dueMonth){
                    this.setState({fortnights: this.state.fortnights +2})
                }
                if( strtMonth == dueMonth ){
                    this.sameMonth(1, dueDay, dueMonth)
                    this.setState({calculated: true})
                }
                strtMonth++
            }
        }

        if(term == 'long'){
            while(strtYear <= dueYear){
                if(strtYear == dueYear){
                    while(strtMonth <= dueMonth){
                        if(strtMonth<dueMonth){
                            this.setState({fortnights: this.state.fortnights +2})
                        }
                        if( strtMonth == dueMonth ){
                            this.sameMonth(1, dueDay, dueMonth)
                            this.setState({calculated: true})
                        }
                        strtMonth++
                    }
                }
                
                if(strtYear < dueYear){
                    while(strtMonth < 13){
                        this.setState({ fortnights: this.state.fortnights +2 })
                        strtMonth++
                    }
                }

                if( dueMonth < strtMonth ){
                    strtMonth = 1
                }

                strtYear++
            }

        }

    }

    payments(){
        amount = Number(this.state.amount)
        pays = amount/this.state.fortnights

        this.setState({biweeklyPay: pays})
    }

    render (){
        const {strtDay, strtMonth, strtYear, reason, amount, fortnights, biweeklyPay} = this.state

        return (
            <View style={styles.container}>
                <Text style={styles.question}> Saving Plan </Text>
                <Text style={styles.question}> {strtDay} </Text>
                <Text style={styles.question}> {strtMonth} </Text>
                <Text style={styles.question}> {strtYear} </Text>
                <Text style={styles.question}> {reason} </Text>
                <Text style={styles.question}> {amount} </Text>
                <Text style={styles.question}> {fortnights} </Text>
                <Text style={styles.question}> {biweeklyPay} </Text>

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