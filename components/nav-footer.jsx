import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import ImageButton from "./ImageButton";


export default function NavigationFooter({navigation}){
  return (
    <View style={styles.container}>
        <ImageButton imageStyle={styles.nav_button} source={require('../assets/map.png')} onPress={() => navigation.navigate('Map')}/>
        <ImageButton imageStyle={styles.nav_button} source={require('../assets/home.png')} onPress={() => navigation.navigate('HomePage')}/>
        <ImageButton imageStyle={styles.nav_button} source={require('../assets/news-white.png')} onPress={() => navigation.navigate('Schedule')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: 'green',
    backgroundColor: '#141414',
    height: 90,
    justifyContent: 'space-around',
  },
  nav_button:{

  }
});