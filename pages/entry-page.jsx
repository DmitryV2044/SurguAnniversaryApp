import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { globalStyle } from '../styles/style';
import ReturnButton from '../components/return-button';
import AppLoading from 'expo-app-loading';
import MainButton from '../components/main-button';


export default function EntryPage({navigation}) {

    return (
      <SafeAreaView style={globalStyle.main_view}>
        <ImageBackground source={require('../assets/iphone-x.png')} resizeMode='stretch' imageStyle={{flex: 1, marginLeft: 170, opacity: 0.6}}>
        <Image source={require('../assets/eventnav.png')} style={{marginTop: '14%', marginLeft: '14%'}}/>
        <Image source={require('../assets/entry-text.png')} style={{marginTop: 70, marginLeft: '20%'}}/>
        <MainButton text='Регистрация' style={{marginTop: 270,}} onPress={() => navigation.navigate('LogIn')}/>
        <Text style={[globalStyle.text, {alignSelf: 'center', marginTop: 20}]}>У вас уже есть учетная запись?</Text>
        <TouchableOpacity style={{marginTop: 10, alignSelf: 'center'}} onPress={() => navigation.navigate('LogIn')}>
            <Image source={require('../assets/log-in.png')}/>
        </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
}

EntryPage.navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    paddingLeft: '10%',
  },
  subtitle:{
    paddingLeft: '20%',
  },  
  input:{
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 14,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
      paddingTop: 0,
      fontSize: 24, 
      color: 'white',
  },
});

