import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { globalStyle } from '../styles/style';
import NavigationFooter from '../components/nav-footer';


export default function MapPage({navigation}) {
    return (
      <View style={globalStyle.fill}>
        <SafeAreaView style={globalStyle.main_view}>
          <Text style={[globalStyle.text_bold, styles.header_text]}>Карта</Text>
          <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
            latitude: 61.252800,
            longitude: 73.400429,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, }}>
              <Marker coordinate={{latitude: 61.252800, longitude: 73.400429,}}>
                <Callout onPress={() => navigation.navigate('HomePage')}>
                  <Text>Мероприятие 1</Text>
                </Callout>
              </Marker>
            </MapView>
    </View>
          <Text style={globalStyle.text}>Map page</Text>
        
        </SafeAreaView> 
          <NavigationFooter navigation={navigation}/>
      </View>

    );
}

const styles = StyleSheet.create({
  header_text:{
    fontSize: 36,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
  },
});

