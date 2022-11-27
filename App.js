import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './pages/login-page';
import EntryPage from './pages/entry-page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsPage from './pages/settings-page';
import MapPage from './pages/map-page';

import HomePage from './pages/home-page';
import EventPage from './pages/event-page';
import EventsSchedulePage from './pages/events-schedule';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const fonts = () => Font.loadAsync({
  'open-sans-r': require('./fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./fonts/OpenSans-Bold.ttf')

})

export default function App(){
  const [font, setFont] = useState(false);
  
  if(font){
    return (
       <NavigationContainer>
     <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Entry"  screenOptions={{
         headerShown: false}}>
          <Stack.Screen name="Entry" component={EntryPage} />
          <Stack.Screen name="LogIn" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Settings" component={SettingsPage} />
          <Stack.Screen name="Map" component={MapPage} />
          <Stack.Screen name="Schedule" component={EventsSchedulePage} />
          <Stack.Screen name="EventPage" component={EventPage} />
       </Stack.Navigator>
       
       </NavigationContainer>
    //   <NavigationContainer >
    //     <StatusBar style="light" />
    //         <Tab.Navigator screenOptions={{
    //             headerShown: false}} initialRouteName="HomePage"  tabBarVisible={false}>
    //             <Tab.Screen name="Settings page" component={SettingsPage} />
    //             <Tab.Screen name="Schedule" component={EventsSchedulePage} />
    //             <Tab.Screen name="Home page" component={HomePage} />
    //         </Tab.Navigator>
    // </NavigationContainer> 
    );
  }
  else {
    return(
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={() => console.log('error')}/>
    );
  }
}




  
