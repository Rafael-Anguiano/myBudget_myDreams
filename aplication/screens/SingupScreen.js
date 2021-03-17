import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import {AuthContext} from '../Auth/AuthProvider';
import { Text, Button, Item, Input, Label } from 'native-base'

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

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

      <View style={{marginVertical:25}}>
        <Item floatingLabel style={{width:'80%'}}>
            <Label style={{padding:10, color:'black'}}> Password: </Label>
            <Input 
              secureTextEntry={true} 
              onChangeText={(userPassword) => setConfirmPassword(userPassword)} 
            />
        </Item>
      </View>

      <View>
        <Button 
            rounded 
            info
            onPress={() => register(email, password)}
        >
            <Text style={{color:'white', fontSize:15}}> Sign Up </Text>
        </Button>
      </View>

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});