import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyle } from '../styles/style';
import EntryPage from './entry-page';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsPage from './settings-page';
import NotificationButton from '../components/notification-button';
import ImageButton from '../components/ImageButton';
import EventMiniPreview from '../components/event-mini-preview';
import RecentsListItem from '../components/recents-list-item';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from './notifications';
import NavigationFooter from '../components/nav-footer';
//import { getMoviesFromApiAsync } from '../components/api-requests';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function HomePage({navigation}) {
    function getUserImage(){
        return 'https://lh3.googleusercontent.com/azuVWnYtKD4D00SC7xLCnfBVJqKIZkuvvgIII27WeQnW-a1n0AFr7sdMN76DYsRGw_HcPT1CLIOp2pT98-_f0szBTetNQBshHndgsMqyk0CPxje-rdZYifEtrjY-V_bC9teh3XfT=w2400';
    }

    function getNextEventImage(){
        return 'https://lh3.googleusercontent.com/pw/AL9nZEWBEotEzBy9MCPCJ-qxFpjaFeX6CSn7CCNLGuO430fUPCjz7Xm4AefaH1XDZcAZhWNDcRTd3IBQ8Rj0fjmVMxcyr2wwlAwnjEGqToFDALHRFmHLig=w2400';
    }
    
    function getNearestImage(){
        return 'https://lh3.googleusercontent.com/p68bvAqPWmKFyWYIghthNPoJLAG-1-JJ-B3ZXTrEhHAcCyQrrHx9goYwG_VJGjwVf8Tlh4WLo7-478128wix8gGQOI22v5c3iYi4iqokGrS9IDy7yzjJ34QkMZYU3dr_y3sG6FN5=w2400'
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('focused page');
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

    async function getEventsFromApi() {

        try {
          let response = await fetch('http://localhost:8888/request-events.php');
          let responseJson = await response.json();
          console.log('response: ' + responseJson[0].eventname);
          return responseJson[0].id;
         } catch(error) {
          console.error(error);
        }
      }

    const [listOfPassedEvents, setListOfItems] = useState([
        {
            key: '1',
            text: 'Item text 1',
            uri: 'https://picsum.photos/id/1/200',
          },
          {
            key: '2',
            text: 'Item text 2',
            uri: 'https://picsum.photos/id/10/200',
          },
          {
            key: '3',
            text: 'Item text 3',
            uri: 'https://picsum.photos/id/1002/200',
          },
          {
            key: '4',
            text: 'Item text 4',
            uri: 'https://picsum.photos/id/1006/200',
          },
          {
            key: '5',
            text: 'Item text 5',
            uri: 'https://picsum.photos/id/1008/200',
          },
    
      ]);

      const addHandler = (text) => {
        setListOfItems((list)=>{
          return[
            {text: text, key: (list.length+1).toString()},
            ...list,
          ]
        }) 
      }     
  

    return (
    <View style={globalStyle.fill}>
      <SafeAreaView style={globalStyle.main_view}>
        {/* <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Entry"  screenOptions={{
            headerShown: false}}>
            <Stack.Screen name="Settings" component={SettingsPage} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
       </NavigationContainer> */}
        <View style={styles.header}>
            <View style={{flexBasis: '20%', paddingLeft: 20}}>
                <Image source={{uri: getUserImage()}} style={styles.userImage}/>
            </View>
            <Text style={[globalStyle.text,{flexBasis: '50%', paddingTop: 10, textAlign: 'left'}]}>UserName</Text>
            <NotificationButton style={{flexBasis: '10%', alignSelf: 'flex-start'}} onPress={() => getEventsFromApi()}/>
            <ImageButton imageStyle={{height: 50, width:50 }} source={require('../assets/settings.png')} onPress={()=> navigation.navigate('Settings')} style={{flexBasis: '10%', paddingTop: 5, marginLeft: 20}}/>
        </View>

        <View style={{flexWrap: 'wrap', flexDirection: 'row', marginLeft: 20}}>
            <EventMiniPreview text='Ближайшее' style={{flexBasis: '45%',}}  imageStyle={{borderColor: '#7C6BFF'}} source={{uri: getNearestImage()}} />
            <EventMiniPreview text='Следующее' style={{flexBasis: '45%', paddingLeft: 30}} source={{uri: getNextEventImage()}}/>
            
        </View>

        <View style={styles.recent_view}>
            <Text style={[globalStyle.text_bold, styles.recent_text]}>Недавно прошедшие</Text>
            <FlatList horizontal data={listOfPassedEvents} showsHorizontalScrollIndicator={false} renderItem={({item} ) => (
            <RecentsListItem item={item}/>
            )} />
        </View>
        {/* <NavigationContainer >
            <Tab.Navigator screenOptions={{
                headerShown: false}}>
                <Tab.Screen name="Settings page" component={SettingsPage} />
                <Tab.Screen name="Home page" component={HomePage} />
            </Tab.Navigator>
    </NavigationContainer> */}
        {/* <View style={{borderWidth: 3, borderColor: 'purple', height: 70}}></View> */}
      </SafeAreaView>
      <NavigationFooter navigation={navigation}/>
      </View>
    );
}

const styles = StyleSheet.create({
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 360,
        borderWidth: 1.5,
        borderColor: '#888888',
        marginTop: 5,
        marginBottom: 40
    },
    header:{
        width: '100%',
        flexDirection: 'row', 
        flexWrap: 'wrap', 
    },
    itemPhoto: {
        width: 200,
        height: 200,
    },
    recent_view: {
        marginTop: 50,
        marginLeft: 20,
    },
    recent_text: {
        marginBottom: 20,
        
        fontSize: 22,
    }
});

