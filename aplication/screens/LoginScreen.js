import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import {AuthContext} from '../Auth/AuthProvider';
import { Text, Button, Item, Input, Label } from 'native-base'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>My Budget - My Dreams</Text>
      
      <View style={{marginVertical:25}}>
        <Item floatingLabel style={{width:'80%'}}>
            <Label style={{padding:10, color:'black'}}> Email: </Label>
            <Input 
              keyboardType="email-address" 
              onChangeText={(userEmail) => setEmail(userEmail)} 
            />
        </Item>
      </View>

      <View style={{marginVertical:25}}>
        <Item floatingLabel style={{width:'80%'}}>
            <Label style={{padding:10, color:'black'}}> Password: </Label>
            <Input 
              secureTextEntry={true} 
              onChangeText={(userPassword) => setPassword(userPassword)} 
            />
        </Item>
      </View>

      <View>
        <Button 
            rounded 
            info
            onPress={() => login(email, password)}
        >
            <Text style={{color:'white', fontSize:15}}> Sign In </Text>
        </Button>
      </View>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex:1,
    paddingTop: 50,
    //backgroundColor:'#596997'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    fontWeight:'bold'
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',

    color: "black",//'#2e64e5',
    fontFamily: 'Lato-Regular',
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