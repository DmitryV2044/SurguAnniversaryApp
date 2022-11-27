import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput} from 'react-native';
import { globalStyle } from '../styles/style';
import ReturnButton from '../components/return-button';
import GetProfileImage from '../components/api-requests';
import { GetProfileName } from '../components/api-requests';


export default function SettingsPage({navigation}) {
    return (
      <SafeAreaView style={globalStyle.main_view}>
        <View style={styles.header_view} >  
            <Text style={[globalStyle.text_bold, styles.header_title]}>Настройки</Text>
            <ReturnButton style={styles.return}/>
        </View>
        <View>
            <Image source={{uri: GetProfileImage()}} style={styles.profile_image}/>
            <Text style={[globalStyle.text_nickname, styles.nickname]}>{GetProfileName()}</Text>
        </View>
        <View>
         <TextInput
              style={globalStyle.input}
              placeholder={'Имя'}
            />
                     <TextInput
              style={globalStyle.input}
              placeholder={'Фамилия'}
            />
                     <TextInput
              style={globalStyle.input}
              placeholder={'Отчество'}
            />
        </View>
        <Text style={globalStyle.text}>Settings page</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  return: {
        flexBasis: '20%',
  },
  header_view: {
    flexWrap: 'wrap', 
    borderWidth: 2, 
    borderColor: 'red',
    flexDirection: 'row', 
    width: '100%',
  },
  header_title: {
    flexBasis: '75%',
    fontSize: 26,
    paddingTop: 23,
    paddingLeft: 30,
  },
  profile_image:{
    height: 200,
    width: 200,
    borderRadius: 360,
    borderWidth: 1.5,
    borderColor: '#888888',
    alignSelf: 'center',
    marginTop: 20,
  },
  nickname:{
    textAlign: 'center',
    marginTop: 20,
  }
});

