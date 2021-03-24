
import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text, Button, Card, CardItem, Thumbnail, Left, Body } from 'native-base'

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
        var justAmount =  this.state.amount.replace('$','');
        amount = Number(justAmount)
        pays = amount/this.state.fortnights

        this.setState({biweeklyPay: pays})
    }

    render (){
        const {strtDay, strtMonth, strtYear, reason, amount, fortnights, biweeklyPay, choosenDate} = this.state
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Select Your Plan: </Text>

                <View style={{width:'90%'}}>
                    <TouchableOpacity>
                        <Card style={{borderColor:'#EFF1FE'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{height:90, width:90}} source={{uri: 'https://blog.automovilshop.com/content/3-planes-de-ahorro/giphy-2.gif'}} />
                                    <Body>
                                        <Text note>Plan A:<Text style={{fontWeight:'bold'}}> {reason}</Text></Text>
                                        <Text note> Goal:<Text style={{fontWeight:'bold'}}> $ {amount}</Text></Text>
                                        <Text note> Pays:<Text style={{fontWeight:'bold'}}> $ {biweeklyPay}</Text></Text>
                                        <Text note> Fortnights:<Text style={{fontWeight:'bold'}}> {fortnights} </Text></Text>
                                        <Text note> Deadline: {choosenDate}</Text>
                                        <Text note> From: {strtMonth}/{strtDay}/{strtYear}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    </TouchableOpacity> 
                </View>
                    
                <View>
                    <Button rounded bordered info onPress={() => {
                        navigation.navigate('Home')
                    }}>
                        <Text>Hello</Text>
                    </Button> 
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      //backgroundColor: "#596997", //#5A7DB0
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
        borderRadius: 6,
        color: "#051d5f",   //#20232a
        //textAlign: "center",
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

//#EFF0F9