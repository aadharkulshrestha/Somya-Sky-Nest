
//Card,Username in chat , 



/*import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'


export default function App() {
  return (
    <AppContainer/>
  );
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  
})

const AppContainer =  createAppContainer(switchNavigator);*/


import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import WelcomeScreen from './screens/WelcomeScreen';
import Exchange from './screens/Exchange';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import MyBartersScreen from './screens/MyBartersScreen';
import NotificationScreen from './screens/NotificationsScreen';
import ReceiverDetailsScreen from './screens/ReceiverDetailsScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  HomeScreen:HomeScreen,
  Exchange:Exchange,
  SettingScreen:SettingScreen,
  MyBartersScreen:MyBartersScreen,
  NotificationScreen:NotificationScreen,
  ReceiverDetailsScreen:ReceiverDetailsScreen
})




const AppContainer =  createAppContainer(switchNavigator);

