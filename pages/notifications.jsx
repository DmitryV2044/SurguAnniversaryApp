import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput} from 'react-native';
import { globalStyle } from '../styles/style';


export default function Notifications({navigation}) {
    return (
      <SafeAreaView style={globalStyle.main_view}>
        <Text style={globalStyle.text}>Map page</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

