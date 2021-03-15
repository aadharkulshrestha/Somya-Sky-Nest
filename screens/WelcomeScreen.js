import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView } from 'react-native';3
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: '',
      isVisible : false,
      firstName : "",
      lastName : "",
      mobileNumber:"",
      FlatNo : "",
      confirmPassword : "",
      
    }
  }

  userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
      this.props.navigation.navigate('HomeScreen')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }
  render(){
    return(<SafeAreaProvider>
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Somya Sky Nest</Text>
          <Text style={{color:'black', fontWeight:'bold'}}> Apartment Management App </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={{color:'black', fontSize:18, fontWeight:'bold',marginLeft:55}}>USERNAME</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
            style={styles.loginBox}
            keyboardType ={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
            />
          </View>
          <Text style={{color:'black', fontSize:18, fontWeight:'bold',marginLeft:55}}>PASSWORD</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={[styles.button,{marginBottom:10}]}
              onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
              >
              <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaProvider>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#6fc0b8'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:60,
    fontWeight:'500',
    color : 'black'
  },
  loginBox:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#32867d',
    fontSize: 20,
    marginBottom:20,
    marginTop:5

  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ffff",
    elevation:10
  },
  buttonContainer:{
    flex:1,
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
      width: "90%",
      height: RFValue(45),
      padding: RFValue(10),
      borderWidth:1,
      borderRadius:2,
      borderColor:"grey",
      paddingBottom:RFValue(10),
      marginLeft:RFValue(20),
      marginBottom:RFValue(14)
  },
  registerButton: {
    width: "85%",
    height: RFValue(50),
    marginTop:RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
})
