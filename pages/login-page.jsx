import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyle } from '../styles/style';
import ReturnButton from '../components/return-button';
import MainButton from '../components/main-button';


export default function LoginPage({navigation}) {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const tryLogIn = () =>{
    console.log('\nlogin: ' + login.toString() + '\npassword: ' )
    navigation.navigate('HomePage')
  };

  const onLoginChange = (input) => {
      setLogin(input)
  };
    const onPasswordChange = (input) => {
      setPassword(input)
  }

    return (
        
      <SafeAreaView style={globalStyle.main_view}>
        <ReturnButton onPress={() => navigation.navigate('Entry')}/>
          <Image source={require("../assets/welcome.png")} style={{marginLeft: '5%', marginBottom: 20, marginTop: 10}}/>
          <Image source={require("../assets/insert-your-data.png")} style={{marginLeft: '20%'}}/>
          <View style={styles.input}>
            <TextInput
              onChange={onLoginChange}
              style={globalStyle.input}
              placeholder={'Логин'}
            />
          <TextInput
              onChange={onPasswordChange}
              style={[globalStyle.input, {marginTop: 15, textAlignVertical: 'top'}]}
              placeholder={'Пароль'}
            />
          </View>

          <MainButton text="Вход" style={{marginTop: 30}} onPress={tryLogIn}/>
          <Text style={[{textAlign: 'center', marginTop: 20}, styles.text]}>или</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('logining in (VK)')}> 
            <Text style={{color: 'white' }}>Log in with VK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('logining in (VK)')}> 
            <Text style={{color: 'white' }}>Log in with Google</Text>
          </TouchableOpacity>
          <Text style={[globalStyle.text, {fontSize: 14, textAlign: 'center', marginTop: 100}]}>
            При регистрации вы даёте согласие на обработку персональных данных и подтверждаете политику конфидициальности.
          </Text>
      </SafeAreaView>
    );
}

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
    paddingTop: 50,
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
      fontSize: 24, 
      color: 'white',
  },
});

