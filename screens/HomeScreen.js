import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config'
import { FontAwesome } from '@expo/vector-icons'; 

export default class HomeScreen extends Component{
  
  render(){
    return(<SafeAreaProvider>
      <View style={styles.container}>
        <MyHeader title="Somya Sky Nest" navigation ={this.props.navigation.navigate('HomeScreen')}/>
        
          <View style={{flex:1,flexDirection:"row",justifyContent:'space-evenly'}}>
            <View>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SettingScreen')}>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Exchange')}>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Mettings/discussion</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gallery')}>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Maintainence')}>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ReceiverDetailsScreen')}>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Services</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity><TouchableOpacity>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#32867d",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
