import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
// import styles from "./style";
import {StyleSheet,Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import Index from "../Index";

//const appId = "1047121222092614"
class LoginScreen extends Component {

  render() {
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1}}>
          <View style={{flex: 1}}>
          <Text style={{fontSize: 40,fontWeight: "800",marginTop: 120,marginBottom: 45,textAlign: 'center',}}>MANASA Market</Text>
            <TextInput placeholder=" Email" placeholderColor="#c4c3cb" 
               style={{height: 43,fontSize: 14,borderRadius: 5,borderWidth: 1,borderColor: '#eaeaea',backgroundColor: '#fafafa',paddingLeft: 10,marginLeft: 15,marginRight: 15,marginTop: 5,marginBottom: 5,}} 
               />
            <TextInput placeholder=" Password" placeholderColor="#c4c3cb" 
               style={{height: 43,fontSize: 14,borderRadius: 5,borderWidth: 1,borderColor: '#eaeaea',backgroundColor: '#fafafa',paddingLeft: 10,marginLeft: 15,marginRight: 15,marginTop: 5,marginBottom: 5,}}
               secureTextEntry={true}/>
            <Button
              buttonStyle={{backgroundColor: 'black',borderRadius: 5,height: 45,paddingLeft: 10,marginLeft: 15,marginRight: 15,marginTop: 20,marginBottom: 5,}}
             // onPress={}
              title="Login"
            />
            <Button
              buttonStyle={{backgroundColor: '#3897f1',borderRadius: 5,height: 45,marginTop: 10,paddingLeft: 10,marginLeft: 15, marginRight: 15,marginTop: 5,marginBottom: 5,}}
             // onPress={}
              title="Login with Facebook"
              color="#3897f1"
            />
             <Button
              buttonStyle={{backgroundColor: 'red',borderRadius: 5,height: 45,marginTop: 10,paddingLeft: 10,marginLeft: 15,marginRight: 15,marginTop: 5,marginBottom: 5,}}
              //onPress={}
              title="Login with Gmail"
              color="#3897f1"
            />
            
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  } 
}

export default LoginScreen;


